import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Have a question, a project in mind, or just want to connect? Feel free
          to reach out to us using the information below:
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Email:{" "}
          <a href="mailto:deepmankar0@gmail.com">deepmankar0@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
