import { useEffect, useState } from 'react';

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Timeline from '../components/timeline';

const Home: NextPage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const renderLink = (href: string, text: string, section: number) => {
    let containerClasses: string = 'transition-all duration-300 hover:transform hover:scale-110 origin-left relative group ';

    if (currentSection === 0) {
      containerClasses += 'text-zinc-400 hover:text-zinc-50';
    } else if (currentSection === 1) {
      containerClasses += 'text-zinc-600 hover:text-zinc-900';
    }

    if (section === currentSection) {
      containerClasses += ' font-bold text-zinc-900';
    }

    return (
      <a href={href} className={containerClasses}>
        {text}
        <span className={`transition-all duration-300 absolute bottom-0 left-0 group-hover:w-full ${currentSection === section ? 'w-full' : 'w-0'} h-[2px] bg-gradient-to-r from-cyan-400 to-rose-500`} />
      </a>
    );
  };

  const calcOpacity = (minPos: number, maxPos: number) => {
    if (scrollPos === minPos) {
      return 100;
    } else if (scrollPos >= maxPos) {
      return 0;
    } else {
      return (maxPos - scrollPos) % maxPos / 10;
    }
  };

  const sectionVisible = (section: number, delay: number = 0): boolean => {
    return scrollPos > (window.innerHeight * (0.5 + section - 1));
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  useEffect(() => {
    setCurrentSection(Math.floor((scrollPos + 50) / (window.innerHeight)));
  }, [scrollPos]);

  if (typeof window === 'undefined') return null;

  return (
    <div className='w-screen h-[500vh] snap-y'>
      <Head>
        <title>Jean-Dominique Stepek</title>
        <meta name="description" content="Jean-Dominique Stepek's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='fixed top-20 right-20 text-lg font-bold flex flex-col gap-5 z-50'>
        {renderLink('#about', 'About', 1)}
        {renderLink('#skills', 'Skills', 2)}
        {renderLink('#projects', 'Projects', 3)}
        {renderLink('#timeline', 'Timeline', 4)}
        {renderLink('#contact', 'Contact', 5)}
      </div>

      <div className='section-container bg-zinc-900'>
        <div className='home-section'>
          <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl lg:text-4xl font-bold flex lg:gap-2 flex-col lg:flex-row'>
            Hey, I&apos;m
            <p>
              <u className="decoration-sky-500">
                Jean-Dominique Stepek
              </u>
              .
            </p>
          </h1>
          <p className='text-zinc-200 absolute left-1/2 transform -translate-x-1/2 bottom-10 flex flex-col items-center gap-2 font-medium text-lg lg:text-xl text-center' style={{
            opacity: `${calcOpacity(0, window.innerHeight - 200)}%`
          }}>
            Learn more about me
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          </p>
        </div>
      </div>
      <div className='section-container bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent' id='about'>
        <div className={`home-section${sectionVisible(1) ? '' : ' hide'} flex flex-col lg:flex-row`}>
          <div className='w-full lg:w-1/2 p-20 h-full relative flex items-center justify-center'>
            <Image
              src="/pictures/oregon.jpg"
              alt="Picture of me at Crater Lake"
              layout='fill'
              objectFit='cover'
              className='about-photo -scale-x-50 scale-y-50 -rotate-12 -translate-x-[10%] -translate-y-[10%]'
              priority={true}
            />
            <Image
              src="/pictures/sam.jpeg"
              alt="Picture of me with Sam the Cooking Guy"
              layout='fill'
              objectFit='cover'
              className='about-photo scale-[40%] rotate-12 translate-x-[20%] translate-y-[-10%]'
              priority={true}
            />
          </div>
          <div className='w-full lg:w-1/2 h-full flex flex-col gap-8 justify-center items-center lg:items-start text-zinc-700 p-10 lg:pr-64'>
            <h1 className="text-5xl font-bold underline decoration-fuchsia-500">
              About Me
            </h1>
            <p className="columns-sm font-medium">
              I&apos;m a software engineer based in Sacramento, California. I&apos;m passionate about web development and I&apos;m always looking for opportunities to work on new and exciting technologies. I&apos;m currently working on a project called <a href='https://charla.cc/' target="_blank" rel='noreferrer' className='text-sky-600 hover:text-sky-800'>Charla.cc</a> which is a platform to assist community owners and leaders in understanding and managing their communities that can range across many platforms like Slack, Discord, and more.
              <br />
              <br />
              In 2020, I graduated from American River College with my <b>Associate of Science (A.S) in Computer Science</b>. Then, I transferred to CSU, Sacramento to pursue my Bachelor of Science in Computer Science; however, I was forced to take a different path due to financial circumstances. After one semester, I dropped out of university and joined a coding bootcamp called <a href='https://www.hackreactor.com/' target="_blank" rel='noreferrer' className='text-sky-600 hover:text-sky-800'>Hack Reactor</a> to pursue my dream of becoming a software engineer where I went on to receive an <b>Advanced Software Engineering Certificate</b> upon completion.
              <br />
              <br />
              I have always been someone with many interests and hobbies. In terms of technology, my interests include <b>Web 3.0</b>, <b>VR/AR</b>, and <b>IoT</b>. In terms of everything else 😁, I enjoy going to music festivals 🎵, reading 📕, and traveling ✈️.
            </p>
          </div>
        </div>
      </div>
      <div className='section-container' id='skills'>
        <div className='home-section text-zinc-700 p-10'>
          <h1 className={sectionVisible(2) ? '' : 'hide'} id='skills-header'>
            Skills &amp; Technologies
          </h1>
          <p className={sectionVisible(2) ? '' : 'hide'} id='skills-body'>
            <ul className='list-disc'>
              <li>
                <b>Front-End</b>
                <ul className='list-disc pl-4'>
                  <li>
                    <b>React</b>
                  </li>
                  <li>
                    <b>Redux</b>
                  </li>
                  <li>
                    <b>Next.js</b>
                  </li>
                  <li>
                    <b>Styled Components</b>
                  </li>
                  <li>
                    <b>Javascript</b>
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className='section-container bg-zinc-200' id='projects'>

      </div>
      <div className='section-container bg-zinc-200' id='timeline'>
        <Timeline />
      </div>
      <div className='section-container bg-zinc-200' id='contact'>

      </div>

    </div >
  )
}

export default Home
