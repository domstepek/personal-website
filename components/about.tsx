import { FunctionComponent } from "react";
import Image from 'next/image';

const About = ({ sectionVisible }: { sectionVisible: Function }) => {
  const handleScroll: any = (e: Event) => {

  };

  return (
    <div className='h-[300vh] bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent' id='about'>
      <div className={`home-section${sectionVisible('about') ? '' : ' hide'} flex flex-col lg:flex-row h-[300vh]`}>
        <div className='w-full lg:w-1/2 py-[5%] h-[300vh] relative flex flex-col items-center justify-center'>
          <div className='h-[100vh] w-full relative'>
            <Image
              src="/pictures/oregon.jpg"
              alt="Picture of me at Crater Lake"
              layout='fill'
              objectFit='cover'
              className='about-photo scale-75 rotate-6'
              priority={true}
            />
          </div>
          <div className='h-[100vh] w-full relative'>
            <Image
              src="/pictures/professional.jpg"
              alt="Headshot"
              layout='fill'
              objectFit='cover'
              className='about-photo scale-75 -rotate-6'
              priority={true}
            />
          </div>
          <div className='h-[100vh] w-full relative'>
            <Image
              src="/pictures/sam.jpeg"
              alt="Picture of me with Sam the Cooking Guy"
              layout='fill'
              objectFit='cover'
              className='about-photo scale-75 rotate-[8deg]'
              priority={true}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2 h-[100vh] flex flex-col gap-8 justify-center items-center lg:items-start text-zinc-700 p-10 lg:pr-64 sticky top-5'>
          <h1 className="text-5xl font-bold underline decoration-fuchsia-500">
            About Me
          </h1>
          <p className="columns-sm font-medium">
            I&apos;m a software engineer based in Sacramento, California. I&apos;m passionate about web development and I&apos;m always looking for opportunities to work on new and exciting technologies. I&apos;m currently working on a project called <a href='https://charla.cc/' target="_blank" rel='noreferrer' className='text-sky-600 hover:text-sky-800'>Charla.cc</a> which is a platform to assist community owners and leaders in understanding and managing their communities that can range across many platforms like Slack, Discord, and more.
            <br />
            <br />
            In 2020, I graduated from American River College with my <b>Associate of Science (A.S) in Computer Science</b>. Then, I transferred to California State University, Sacramento to pursue my Bachelor of Science in Computer Science. After one semester, I dropped out of university and joined a coding bootcamp called <a href='https://www.hackreactor.com/' target="_blank" rel='noreferrer' className='text-sky-600 hover:text-sky-800'>Hack Reactor</a> to pursue my dream of becoming a software engineer where I went on to receive an <b>Advanced Software Engineering Certificate</b> upon completion.
            <br />
            <br />
            I have always been someone with many interests and hobbies. In terms of technology, my interests include <b>Web 3.0</b>, <b>VR/AR</b>, and <b>IoT</b>. In terms of everything else 😁, I enjoy going to music festivals 🎵, reading 📕, and traveling ✈️.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;