import projects from '../data/projects'
import PropTypes from 'prop-types'
import Reveal from './reveal'

const ProjectCard = ({ project, index }) => {
    const hasLinks = project.liveUrl || project.sourceUrl

    return (
        <Reveal as="article" className="project-card" delay={(index % 2) * 0.06}>
            <div className="project-media">
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                <div className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
            </div>

            <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                {project.technologies.length > 0 && (
                    <ul className="project-technologies" aria-label={`${project.title} technologies`}>
                        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                )}

                {hasLinks && (
                    <div className="project-links">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                Live project <i className="bx bx-up-arrow-alt" aria-hidden="true" />
                            </a>
                        )}
                        {project.sourceUrl && (
                            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                Source code <i className="bx bxl-github" aria-hidden="true" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </Reveal>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        liveUrl: PropTypes.string,
        sourceUrl: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
}

const Projects = () => {
    return (
        <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
            <div className="section-shell">
                <Reveal className="section-heading-row project-heading">
                    <div>
                        <h2 className="section-title" id="projects-title">Projects built with purpose.</h2>
                        <p className="mt-2">A selection spanning enterprise systems, behavioral platforms, AI-powered productivity tools, and client-facing websites.</p>
                    </div>
                </Reveal>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} index={index} key={project.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
