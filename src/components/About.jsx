import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          Hello! My name is Deep Chakradhar Mankar, and I am a Master of Computer Applications (MCA) student with a passion for front-end development, specializing in React.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          My mission is to leverage modern web technologies to create intuitive and visually appealing user experiences. As a React Developer, I focus on building responsive and functional interfaces using Tailwind CSS and React.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          Currently pursuing a Master of Computer Applications (MCA), I have always been fascinated by the web development world. My journey in tech started with learning the basics of HTML, CSS, and JavaScript and has since evolved into a dedicated focus on front-end development with React.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">More About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          As a solo developer, I bring a unique perspective to my projects. Here are some key details about me:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li><strong>Name:</strong> Deep Chakradhar Mankar</li>
          <li><strong>Role:</strong> React.js Developer</li>
          <li><strong>Specialization:</strong> React.js</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-2">
          I would love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out:
        </p>
        <p className="text-lg text-blue-500 underline">
          Email: <a href="mailto:deepmankar0@gmail.com">deepmankar0@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default About;