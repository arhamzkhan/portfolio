import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#0d0d10] border border-neutral-800 rounded-lg p-6 space-y-4 font-mono text-xs text-neutral-300">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
          <span className="text-cyan-400 font-bold">$ cat {project.id}.txt</span>
          <button onClick={onClose} className="text-neutral-500 hover:text-white">
            [x]
          </button>
        </div>

        <div className="space-y-3 font-sans text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-mono text-sm font-bold text-neutral-100">{project.name}</h3>
              {project.status && (
                <span className="text-[10px] font-mono text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded bg-amber-500/10">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-neutral-400 mt-1">{project.description}</p>
          </div>

          {project.note && (
            <p className="font-mono text-[11px] text-neutral-500 bg-neutral-900/60 p-2.5 rounded border border-neutral-800">
              {project.note}
            </p>
          )}

          <div>
            <span className="font-mono text-[10px] text-neutral-500 block uppercase mb-1">stack</span>
            <div className="font-mono text-neutral-400">
              {project.stack.join(', ')}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                live demo ↗
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:underline"
              >
                {project.isPublic ? 'github ↗' : 'private repo'}
              </a>
            )}
            {!project.links?.demo && !project.links?.github && (
              <span className="text-neutral-600 font-mono text-[11px]">
                {project.status === 'COMING SOON' ? 'coming soon' : 'links hidden'}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white rounded"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
