import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalDrawer({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'arham quiet terminal' },
    { type: 'sys', text: 'commands: whoami, projects, securescan, secretguard, ourstory, proposalos, socials, clear, exit' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const allProjects = [
    ...(portfolioData.projects.main || []),
    ...(portfolioData.projects.comingSoon || []),
    ...(portfolioData.projects.archive || [])
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const raw = input.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    const newLogs = [...history, { type: 'cmd', text: raw }];

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      setInput('');
      return;
    } else if (cmd === 'help') {
      newLogs.push({
        type: 'out',
        text: 'whoami, projects, securescan, secretguard, ourstory, proposalos, socials, clear, exit'
      });
    } else if (cmd === 'whoami') {
      newLogs.push({
        type: 'out',
        text: `arham khan\n${portfolioData.profile.bio}\nlahore, pakistan`
      });
    } else if (cmd === 'projects' || cmd === 'ls') {
      newLogs.push({
        type: 'out',
        text: allProjects.map((p) => `${p.id}: ${p.tagline} ${p.status ? `[${p.status}]` : ''}`).join('\n')
      });
    } else if (allProjects.some((p) => p.id === cmd)) {
      const p = allProjects.find((item) => item.id === cmd);
      if (p) {
        newLogs.push({
          type: 'out',
          text: `${p.name}: ${p.description}\nstack: ${p.stack.join(', ')}${p.links?.demo ? `\ndemo: ${p.links.demo}` : ''}`
        });
      }
    } else if (cmd === 'socials') {
      newLogs.push({
        type: 'out',
        text: portfolioData.socials.map((s) => `${s.platform}: ${s.username}`).join('\n')
      });
    } else {
      newLogs.push({ type: 'err', text: `command not found: ${raw}` });
    }

    setHistory(newLogs);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg h-[60vh] bg-[#0c0c0e] border border-neutral-800 rounded-lg p-4 font-mono text-xs text-neutral-300 flex flex-col">
        <div className="flex items-center justify-between pb-2 border-b border-neutral-800 mb-2">
          <span className="text-neutral-500">$ cli shell</span>
          <button onClick={onClose} className="text-neutral-500 hover:text-white">
            [x]
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1 text-neutral-400">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'sys' && <div className="text-neutral-600">{item.text}</div>}
              {item.type === 'cmd' && <div className="text-cyan-400">$ {item.text}</div>}
              {item.type === 'out' && <pre className="text-neutral-300 whitespace-pre-wrap pl-2 border-l border-neutral-800">{item.text}</pre>}
              {item.type === 'err' && <div className="text-red-400">{item.text}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleCommand} className="pt-2 border-t border-neutral-800 flex items-center gap-2">
          <span className="text-cyan-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command..."
            className="flex-1 bg-transparent outline-none text-neutral-200 font-mono text-xs"
          />
        </form>
      </div>
    </div>
  );
}
