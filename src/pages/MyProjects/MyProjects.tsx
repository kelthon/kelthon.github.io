import { projects } from '@services/data';
import './MyProjects.css';

function MyProjects() {
  const projectList = projects.map((project, index) => {
    return (
      <li className="pl-project-item" key={project.id}>
        <span className="pl-pi-counter">{index + 1}.</span>
        <a className="pl-pi-link" href={project.url}>
          <h3 className="pl-pi-lnk-title">{project.title}</h3>
          <p className="pl-pi-lnk-description">
            <small>{project.description}</small>
          </p>
        </a>
      </li>
    );
  });

  return (
    <section id="my-projects">
      <ol className="project-list">{projectList}</ol>
    </section>
  );
}

export default MyProjects;
