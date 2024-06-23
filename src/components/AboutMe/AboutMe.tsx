import { useEffect, useState } from 'react';
import FallbackImage from '../FallbackImage/FallbackImage';
import './AboutMe.css';

function handleImageSize() {
  return `${window.innerWidth < 768 ? 192 : 256}px`;
}

function AboutMeSection(): JSX.Element {
  const [imageSize, setImageSize] = useState<string>(handleImageSize());

  useEffect(() => {
    window.addEventListener('resize', () => setImageSize(handleImageSize()));
  }, []);

  return (
    <section id="about-me">
      <header>
        <h2>Hello, World!</h2>
        <p>
          I'm Kelthon Alves, a full-stack web developer, I leverage{' '}
          <b className="highlight">TypeScript</b> and{' '}
          <b className="highlight">React </b>to craft engaging web user
          experiences. My focus lies in developing responsive and accessible
          interfaces, which are seamlessly integrated with{' '}
          <b className="highlight">AWS </b>to deliver an optimized user
          experience.
        </p>
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
