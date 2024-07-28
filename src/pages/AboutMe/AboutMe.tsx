import useLanguage from '@hooks/language';
import FallbackImage from '@images/FallbackImage/FallbackImage';
import Translations from '@services/data';
import { useEffect, useState } from 'react';
import './AboutMe.css';

function handleImageSize() {
  return `${window.innerWidth < 768 ? 192 : 256}px`;
}

function AboutMeSection(): JSX.Element {
  const { language } = useLanguage();
  const aboutMe = Translations.get(language)!.aboutMe;
  const [imageSize, setImageSize] = useState<string>(handleImageSize());
  const description = aboutMe.description.map((text, index) => {
    return index % 2 === 0 ? (
      <span key={index}>{text}</span>
    ) : (
      <b key={index} className="highlight">
        {' ' + text + ' '}
      </b>
    );
  });

  useEffect(() => {
    window.addEventListener('resize', () => setImageSize(handleImageSize()));
  });

  return (
    <section id="about-me">
      <header>
        <h2>{aboutMe.title}</h2>
        <p>{description}</p>
      </header>
      <footer className="photo-wrapper">
        <p>
          <FallbackImage
            src="/photo.webp"
            alt="Kelthon's profile photo"
            width={imageSize}
            height={imageSize}
            radius="100%"
            iconSize="2.5rem"
            backgroundColor="#ccc"
          />
        </p>
      </footer>
    </section>
  );
}

export default AboutMeSection;
