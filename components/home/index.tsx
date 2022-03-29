import { FunctionComponent, useCallback } from "react";
import Image from 'next/image';

import { Canvas, useFrame } from '@react-three/fiber'

import useScroll from "hooks/useScroll";

const Home = ({ sectionVisible }: { sectionVisible: Function }) => {
  const scrollPos = useScroll();

  const calcOpacity = useCallback((minPos: number, maxPos: number) => {
    if (scrollPos === minPos) {
      return 100;
    } else if (scrollPos >= maxPos) {
      return 0;
    } else {
      return (maxPos - scrollPos) % maxPos / 10;
    }
  }, [scrollPos]);

  return (
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
        <a href='#about' className='text-zinc-200 absolute left-1/2 transform -translate-x-1/2 bottom-10 flex flex-col items-center gap-2 font-medium text-lg lg:text-xl text-center' style={{
          opacity: `${calcOpacity(0, window.innerHeight - 200)}%`
        }}>
          Learn more about me
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;