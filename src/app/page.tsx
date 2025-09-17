'use client';

import Image from 'next/image';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <Image
        src="/home.jpg"
        alt="Home"
        width={200}
        height={150}
        className="mx-auto rounded-lg shadow-md mb-6"
      />
      <p className="text-lg leading-relaxed">
        Hello! I'm a frontend developer passionate about building clean and user-friendly websites. 
        With a strong foundation in modern web technologies like React and Tailwind, I love bringing ideas to life. 
        This portfolio showcases a glimpse of my skills and experience.
      </p>
    </div>
  );
};

export default Home;
