import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  const { main, comingSoon, archive } = portfolioData.projects;

  return (
    <section id="projects" className="py-12 border-t border-neutral-900 space-y-12">
      {/* 1. MAIN WORK */}
      <div className="space-y-6">
        <div className="flex items-center justify-between font-mono text-xs text-neutral-500 pb-1 border-b border-neutral-900/60">
          <span>$ ls ./projects/main</span>
          <span className="text-[10px] uppercase text-cyan-400/80 font-mono tracking-wider font-semibold">
            main work
          </span>
        </div>

        <div className="space-y-8">
          {main.map((project) => (
            <div key={project.id} className="space-y-2 group">
              <div className="flex items-baseline justify-between gap-4 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </span>
                  {!project.isPublic && (
                    <span className="text-[10px] text-neutral-500 font-mono">[private]</span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      live ↗
                    </a>
                  )}
                  {project.links?.github && project.isPublic && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-200 transition-colors"
                    >
                      github ↗
                    </a>
                  )}
                  {project.links?.github && !project.isPublic && (
                    <span className="text-neutral-600 font-mono">repo [private]</span>
                  )}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors text-xs"
                  >
                    details
                  </button>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {project.note && (
                <p className="font-mono text-[11px] text-neutral-500">
                  note: {project.note}
                </p>
              )}

              <div className="font-mono text-[11px] text-neutral-500">
                {project.stack.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. COMING SOON */}
      <div className="space-y-6 pt-4 border-t border-neutral-900/60">
        <div className="flex items-center justify-between font-mono text-xs text-neutral-500 pb-1 border-b border-neutral-900/60">
          <span>$ ls ./projects/coming-soon</span>
          <span className="text-[10px] uppercase text-amber-400/80 font-mono tracking-wider font-semibold">
            coming soon
          </span>
        </div>

        <div className="space-y-8">
          {comingSoon.map((project) => (
            <div key={project.id} className="space-y-2 group">
              <div className="flex items-baseline justify-between gap-4 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-200 group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </span>
                  <span className="text-[10px] text-amber-400/90 font-mono border border-amber-500/30 px-1.5 py-0.5 rounded bg-amber-500/10">
                    {project.status || 'COMING SOON'}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors text-xs"
                  >
                    details
                  </button>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="font-mono text-[11px] text-neutral-500">
                {project.stack.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ARCHIVE */}
      <div className="space-y-4 pt-4 border-t border-neutral-900/60">
        <div className="flex items-center justify-between font-mono text-xs text-neutral-500 pb-1 border-b border-neutral-900/60">
          <span>$ ls ./projects/archive</span>
          <span className="text-[10px] uppercase text-neutral-600 font-mono tracking-wider">
            archive
          </span>
        </div>

        {archive && archive.length > 0 ? (
          <div className="space-y-8">
            {archive.map((project) => (
              <div key={project.id} className="space-y-2 group">
                <div className="flex items-baseline justify-between gap-4 font-mono text-sm">
                  <span className="font-bold text-neutral-400">{project.name}</span>
                  <span className="text-[10px] text-neutral-600 font-mono">[archived]</span>
                </div>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="font-mono text-xs text-neutral-600 py-1">
            // empty archive placeholder
          </div>
        )}
      </div>
    </section>
  );
}
