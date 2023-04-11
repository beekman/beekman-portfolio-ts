/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Nav from '../components/Nav/Nav';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Data from '../portfolio-data';

interface Technology {
  name: string;
}

interface Skill {
  heading: string;
  techHeading: string;
  techCopy: string;
  tech: Technology[];
  learningCopy: string;
  learning: Technology[];
  resumeLink: string;
}

interface Feature {
  title: string;
  description: string;
  demo: string;
  github: string;
  tech: Technology[];
}

interface Projects {
  history: string;
  summary: string;
  designPortfolioLink: string;
  feature: Feature[];
}

interface Data {
  about: About;
  contact: Contact;
  skills: Skill;
  projects: Projects;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Beekman, Full Stack Engineer</title>
        <meta
          name="description"
          content="Portfolio for Ben Beekman, Full Stack Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Poppins&family=Play&display=swap"
          rel="stylesheet"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css"
        /> */}
      </Head>
      <main className={styles.main}>
        <Nav />
        <About about={Data.about} title={''} summary={''} pitch={''} />
        <Skills
          skills={Data.skills}
          tech={[]}
          learning={[]}
          heading={''}
          techHeading={''}
          techCopy={''}
          learningCopy={''}
          resumeLink={''}
        />
        <Projects projects={Data.projects} />
        <Contact
          contact={Data.contact}
          name={''}
          heading={''}
          resumeLink={''}
          street={''}
          city={''}
          state={''}
          zip={''}
          phone={''}
          email={''}
          linkedinURL={''}
          githubURL={''}
          tagline={''}
          hiringStatus={''}
        />
      </main>
    </>
  );
}
