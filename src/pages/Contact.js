import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center pt-16 pb-20 px-4 sm:pt-20 sm:pb-28 sm:px-6">
      {/* Title */}
      <p className="text-center text-green-500 italic mb-12 sm:mb-16 text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-lg">
        Contact Me
      </p>

      {/* Contact Container */}
      <div className="bg-gray-800 max-w-6xl w-full rounded-lg p-8 flex flex-col md:flex-row gap-10 shadow-lg mb-16">
        {/* Left Panel - Contact Info */}
        <div className="flex flex-col gap-6 text-green-500 flex-1">
          <h3 className="font-mono font-semibold text-lg mb-4">Contact Information</h3>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhone className="bg-white text-black rounded p-1" size={24} />
            <span className="text-white text-lg">+91 7075255742</span>
          </div>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=keerthanaperavali9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer break-words"
          >
            <FaEnvelope
              className="bg-white text-black rounded p-1 transition-transform duration-200 group-hover:scale-110"
              size={24}
            />
            <span className="text-white text-base sm:text-lg transition-colors duration-200 group-hover:text-green-400 break-all">
              keerthanaperavali9@gmail.com
            </span>
          </a>
        </div>

        {/* Right Panel - Contact Form */}
        <form
          action="https://formsubmit.co/keerthanaperavali9@gmail.com"
          method="POST"
          className="flex-1 bg-gray-900 border border-green-600 rounded-lg p-6 flex flex-col gap-6"
        >
          {/* Hidden FormSubmit settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_autoresponse" value="Thank you for contacting me!" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-gray-800 border border-green-300 rounded-xl p-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-gray-800 border border-green-300 rounded-xl p-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="bg-gray-800 border border-green-300 rounded-xl p-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
