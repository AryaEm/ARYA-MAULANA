import type { Project } from '@/lib/data/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="pc" aria-label={project.title}>
      <div className="pc__num">{project.num}</div>
      <div className="pc__icon" aria-hidden="true">
        <i className={`ti ${project.icon ?? 'ti-code'}`} />
      </div>
      <h3 className="pc__title">{project.title}</h3>
      <p className="pc__desc">{project.description}</p>

      <div className="pc__tags" aria-label="Technologies">
        {project.tags.map((tag) => (
          <span key={tag} className="pc__tag">{tag}</span>
        ))}
      </div>

      <div className="pc__links">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pc__icon-link"
            aria-label={`Live demo of ${project.title}`}
          >
            <i className="ti ti-external-link" aria-hidden="true" />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pc__icon-link"
            aria-label={`Source code of ${project.title}`}
          >
            <i className="ti ti-brand-github" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}