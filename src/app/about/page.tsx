'use client';

import Image from 'next/image';

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <Image
        src="/about.jpg"
        alt="About"
        width={200}
        height={100}
        className="mx-auto rounded-lg shadow-md mb-6"
      />
      <p className="text-lg leading-relaxed">
        I am a self-taught developer with a deep interest in creating interactive and responsive web apps. 
        I enjoy learning new tools and frameworks that make development efficient and fun. 
        My goal is to write clean, maintainable code and continuously grow as a developer.
      </p>
    </div>
  );
};

export default About;
