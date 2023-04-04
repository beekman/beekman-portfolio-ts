/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Nav from '../components/Nav/Nav';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import data from '../portfolio-data';

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css"
        />
        <link rel="stylesheet" href="./components/style.css/" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <About about={data.about} />
        <Skills skills={data.skills} learning={data.learning} />
        <Projects projects={data.projects} />
        <Contact contact={data.contact} />
      </main>
    </>
  );
}
