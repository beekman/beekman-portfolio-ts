import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skills.module.css';
import Skill from './Skill';
// import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';

interface Skill {
  name: string;
}

interface Skills {
  heading: string;
  techHeading: string;
  techCopy: string;
  tech: Skill[];
  learningCopy: string;
  learning: Skill[];
  resumeLink: string;
}

const Skills = (skills: Skills) => {
  const SkillList = skills.tech.map((skill, i) => {
    return (
      <li key={i} className={styles.Skill}>
        <Skill skill={skill} />
      </li>
    );
  });

  const LearningList = skills.learning.map((learning, i) => {
    return (
      <li key={i} className={styles.Skill}>
        <Skill skill={learning} />
      </li>
    );
  });

  return (
    <Element name="Skills" className="Skills">
      <div className={styles.Skills}>
        <h1>{skills.heading}</h1>

        <section>
          <p>
            {skills.techCopy}{' '}
            <a
              href={skills.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View my resume.
            </a>
          </p>

          <h2 className={styles.skillsHeading}>{skills.techHeading}</h2>

          <ul className={styles.SkillList}>{SkillList}</ul>

          <h2 className={styles.skillsHeading}>I&apos;m learning these</h2>

          <ul className={styles.SkillList}>{LearningList}</ul>
        </section>
      </div>
    </Element>
  );
};

Skills.propTypes = {
  skills: PropTypes.object,
  tech: PropTypes.array,
  learning: PropTypes.array,
};

export default Skills;
