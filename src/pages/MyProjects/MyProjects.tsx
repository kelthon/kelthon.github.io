import './Portfolio.css';
import { projects } from '../../data/data';

function Projects() {
  const projectList = projects.map((project) => {
    return (
      <li key={project.id}>
        <h3>
          <a href={project.url}>{project.title}</a>
        </h3>
      </li>
    );
  });

  return (
    <section id="projects">
      <header>
        <h2>Featured Projects</h2>
      </header>
      <ol>{projectList}</ol>
    </section>
  );
}

export default Projects;
