import useLanguage from '@hooks/language';
import {
  RiExternalLinkFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from '@remixicon/react';
import Translations from '@services/data';
import './ContactMe.css';

function ContactMe(): JSX.Element {
  const { language } = useLanguage();
  const content = Translations.get(language)!.contactMe.map((text, index) => {
    return index % 2 === 0 ? (
      <span key={index}>{text}</span>
    ) : (
      <span key={index} className="cm-text-highlight">
        {' ' + text + ' '}
      </span>
    );
  });

  return (
    <section id="contact-me">
      <h2>{content}</h2>

      <div className="container">
        <div className="contact-list">
          <p className="wrapper">
            <RiGithubFill />
            <a href="https://github.com/kelthon">
              github.com/kelthon
              <RiExternalLinkFill />
            </a>
          </p>
          <p className="wrapper">
            <RiLinkedinBoxFill />
            <a href="https://linkedin.com/in/kelthon-alves/">
              linkedin.com/kelthon-alves
              <RiExternalLinkFill />
            </a>
          </p>
          <p className="wrapper">
            <RiMailFill />
            <a href="mailto:kelthonbalbino@gmail.com">
              kelthonbalbino@gmail.com
              <RiExternalLinkFill />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
