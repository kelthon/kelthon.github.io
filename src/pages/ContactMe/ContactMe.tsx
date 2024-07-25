import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from '@remixicon/react';
import './ContactMe.css';

function ContactMe(): JSX.Element {
  return (
    <section id="contact-me">
      <h2>
        You can contact me thought of{' '}
        <span className="cm-text-highlight">channels</span> below:
      </h2>

      <div className="container">
        <div className="contact-list">
          <p className="wrapper">
            <RiGithubFill />
            <a href="https://github.com/kelthon">github.com/kelthon</a>
          </p>
          <p className="wrapper">
            <RiLinkedinBoxFill />
            <a href="https://linkedin.com/kelthon-alves">
              linkedin.com/kelthon-alves
            </a>
          </p>
          <p className="wrapper">
            <RiMailFill />
            <a href="mailto:kelthonbalbino@gmail.com">
              kelthonbalbino@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
