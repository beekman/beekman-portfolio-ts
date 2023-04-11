import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import { Element } from 'react-scroll';
import photo from '../../assets/ben-beekman-profile-800.jpg';
import Image from 'next/image';

interface About {
  title: string;
  summary: string;
  pitch: string;
}

const About = (about: About) => {
  return (
    <Element name="About" className={styles.About}>
      <header>
        <h1>`Hi, I&apos;m Ben. I&apos;m a Full Stack Web Engineer`</h1>
      </header>

      <main>
        <section>
          <p>{about.summary}</p>
          <p>{about.pitch}</p>
        </section>
        <figure className={styles.profile}>
          <Image src={photo} alt={'Ben Beekman'} />
        </figure>
      </main>
    </Element>
  );
};

About.propTypes = {
  about: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pitch: PropTypes.string.isRequired,
  }),
};

export default About;
