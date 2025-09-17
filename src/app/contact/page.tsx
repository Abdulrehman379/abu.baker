'use client';

import Image from 'next/image';

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <Image
        src="/home.jpg"
        alt="Contact"
        width={200}
        height={100}
        className="mx-auto rounded-lg shadow-md mb-6"
      />
      <p className="text-lg leading-relaxed">
        If you'd like to work together or just say hi, feel free to reach out! 
        I'm always open to new opportunities and collaborations. 
        You can find me on LinkedIn or send me an email anytime.
      </p>
    </div>
  );
};

export default Contact;
