import FeaturedProject from '@/components/ui/featuredProject'
import ProjectCard from '@/components/ui/projectCard'
import { featuredProject, otherProjects } from '@/lib/data/project'

export default function ProjectSection() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="projects__inner">

        {/* Header row */}
        <div className="projects__header">
          <div className="projects__tag" aria-hidden="true">
            <span className="projects__tag-line" />
            <span className="projects__tag-label">PROJECTS \ LEVEL 03</span>
          </div>

          <a
            href="https://github.com/AryaEm?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__gh-link"
            aria-label="View all projects on GitHub"
          >
            <i className="ti ti-brand-github" aria-hidden="true" />
            view all on github
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </a>
        </div>

        {/* Headline */}
        <div className="projects__headline-wrap">
          <h2 id="projects-heading" className="projects__headline">
            Things I&apos;ve <span className="projects__headline-accent">built.</span>
          </h2>
          <p className="projects__sub">
            A selection of projects, each one a puzzle that needed solving.
          </p>
        </div>

        {/* Featured card */}
        <div className="projects__featured">
          <FeaturedProject project={featuredProject} />
        </div>

        {/* Mini grid */}
        <div
          className="projects__grid"
          role="list"
          aria-label="Other projects"
        >
          {otherProjects.map((project) => (
            <div key={project.id} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}