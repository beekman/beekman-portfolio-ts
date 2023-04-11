import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Element } from 'react-scroll';
// import Typist from 'react-typist';
interface Contact {
  heading: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  linkedinURL: string;
  githubURL: string;
  tagline: string;
  resumeLink: string;
  hiringStatus: string;
}

const Contact = (contact: Contact) => {
  const emailURL = '!mailto' + contact.email;
  return (
    <Element name="Contact" className="Contact">
      <div className={styles.Contact}>
        {/* <ScrollAnimation animateIn="tada"> */}
        <h1>{contact.heading}</h1>
        {/* </ScrollAnimation> */}
        <p className={styles.hiringStatus}>{contact.hiringStatus}</p>
        {/* <Typist cursor={{ show: false }}> */}
        <h2 className={styles.tagline}>{contact.tagline}</h2>
        {/* </Typist> */}
        <section className={styles.social}>
          {contact.name}
          <br />
          {contact.city}, {contact.state}
          <br />
          <br />
          <a href={emailURL}>
            <AiOutlineMail />
            {contact.email}
          </a>
          <br />
          <a href={contact.linkedinURL}>
            <FaLinkedin />
            /in/beekman
          </a>
          <br />
          <a href={contact.githubURL}>
            <FaGithub />
            /beekman
          </a>
          <br />
          <a
            href={contact.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume
          </a>
        </section>
      </div>
    </Element>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    heading: PropTypes.string,
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedinURL: PropTypes.string.isRequired,
    githubURL: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    resumeLink: PropTypes.string,
    hiringStatus: PropTypes.string,
  }),
};

export default Contact;
