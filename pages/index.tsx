import { useEffect, useState, useCallback } from 'react';

import type { NextPage } from 'next'
import Head from 'next/head'

import sections, { Section } from '../src/sections';

import Timeline from '../components/timeline';
import About from '../components/about';
import HomePage from '../components/home';

import useScroll from 'hooks/useScroll';

const Home: NextPage = () => {
  const scrollPos = useScroll();
  const [currentSection, setCurrentSection] = useState('home');

  const renderLink = (href: string, text: string, section: string) => {
    let containerClasses: string = 'transition-all duration-300 hover:transform hover:scale-110 origin-left relative group ';

    if (currentSection === 'home') {
      containerClasses += 'text-zinc-400 hover:text-zinc-50';
      if (section === currentSection) {
        containerClasses += ' font-bold text-white';
      }
    } else {
      containerClasses += 'text-zinc-600 hover:text-zinc-900';
      if (section === currentSection) {
        containerClasses += ' font-bold text-zinc-900';
      }
    }

    return (
      <a href={href} className={containerClasses} key={section}>
        {text}
        <span className={`transition-all duration-300 absolute bottom-0 left-0 group-hover:w-full ${currentSection === section ? 'w-full' : 'w-0'} h-[2px] bg-gradient-to-r from-cyan-400 to-rose-500`} />
      </a>
    );
  };

  const sectionVisible = (section: string): boolean => {
    return section === currentSection;
  };

  useEffect(() => {
    let currSection: Section = sections[0];
    let currSectionPos: number = 0;

    for (const section of sections) {
      if (scrollPos + (window.innerHeight / 2) > currSectionPos) {
        currSection = section;
      }

      currSectionPos += (section.height / 100) * window.innerHeight;
    }

    setCurrentSection(currSection.id);
  }, [scrollPos]);


  const calcOpacity = useCallback((minPos: number, maxPos: number) => {
    if (scrollPos === minPos) {
      return 100;
    } else if (scrollPos >= maxPos) {
      return 0;
    } else {
      return (maxPos - scrollPos) % maxPos / 10;
    }
  }, [scrollPos]);

  if (typeof window === 'undefined') return null;

  return (
    <div className='w-screen h-[700vh] snap-y'>
      <Head>
        <title>Jean-Dominique Stepek</title>
        <meta name="description" content="Jean-Dominique Stepek's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='fixed top-20 right-20 text-lg font-bold flex flex-col gap-5 z-50'>
        {
          sections.map((section) => {
            return renderLink(section.url, section.title, section.id);
          })
        }
      </div>

      <HomePage sectionVisible={sectionVisible} />
      <About sectionVisible={sectionVisible} />
      <div className='section-container' id='skills'>
        <div className='home-section text-zinc-700 p-10 flex flex-col items-center '>
          <h1 className={sectionVisible('skills') ? '' : 'hide'} id='skills-header'>
            Skills &amp; Technologies
          </h1>
          <div className={sectionVisible('skills') ? '' : 'hide'} id='skills-body'>
            <div className='skills-body-section'>
              <h3>
                Languages
              </h3>
              <ul>
                <li>Javascript (ES5+)</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>VB.Net</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>C++</li>
                <li>C</li>
              </ul>
            </div>
            <div className='skills-body-section'>
              <h3>
                Technologies
              </h3>
              <ul>
                <li>React</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>DynamoDB</li>
                <li>Redis</li>
                <li>Webpack</li>
                <li>Docker</li>
                <li>Git</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className='skills-body-section'>
              <h3>
                Other
              </h3>
            </div>
          </div>
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
