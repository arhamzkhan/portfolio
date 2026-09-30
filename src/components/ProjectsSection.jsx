import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="py-12 border-t border-neutral-900 space-y-6">
      <div className="font-mono text-xs text-neutral-500">$ ls ./projects</div>

      <div className="space-y-8">
        {portfolioData.projects.map((project) => (
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
    </section>
  );
}
