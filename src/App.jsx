import './App.css'
import { MdOutlineLabelImportant } from "react-icons/md";
import developerImg from '../src/assets/icons/eti-3.png';
import { FaFacebook, FaGithub, FaLinkedin, FaSmile } from 'react-icons/fa';
import { FaLaptopCode, FaMusic, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
     {/* navbar start */}
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li> 
      <li><a>About Me</a></li>
      <li><a>Project</a></li>
      <li><a>Contact Me</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <MdOutlineLabelImportant />
      E <span className='text-amber-600'>T</span>I</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li> 
      <li><a>About Me</a></li>
      <li><a>Project</a></li>
      <li><a>Contact Me</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Resume</a>
  </div>
</div>
     {/* navbar ends */}

  {/* Banner start here */}
  <div
  className="head bg-no-repeat bg-left-top border
  md:bg-[url('../src/assets/icons/header_bg.png')] md:bg-right-bottom"
>
  <div className="banner flex flex-col md:flex-row justify-between items-center">
    {/* Left Content */}
    <div className="banner-content ml-32  max-w-[580px] text-center md:text-left">
      <h4 className="bnr-style text-[30px] font-bold text-gray-800">Hi, I am</h4>
      <h2
        className="bnr-t-style text-[60px] font-extrabold text-transparent"
        style={{
          backgroundImage: "linear-gradient(#F948B2, #8758F1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        Farjana Eti
      </h2>

      <p className="banner-p text-gray-600 mt-4">
        I am a frontend Developer
      </p>

      <div className="flex items-center justify-center md:justify-start text-4xl my-4 gap-4">
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/">
          <FaGithub />
        </a>
      </div>

      <div className="mt-6 flex justify-center md:justify-start">
        <button className="btn-all bg-blue-500 text-white px-6 py-2 rounded-lg mr-4">
          Resume
        </button>
        <button className="btn-all bg-gray-700 text-white px-6 py-2 rounded-lg">
          Contact
        </button>
      </div>
    </div>

    {/* Right Image */}
    <img
      src={developerImg}
      alt="Developer"
      className="bnr-img rounded-lg  w-[584px] h-[600px] mt-0 md:mt-0"
    />
  </div>
</div>


  {/* Banner ends here */}

   {/* About me start here */}
   <div className="max-w-7xl mx-auto p-10 bg-gradient-to-r from-amber-50 to-yellow-100 shadow-xl rounded-lg">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
        About Me
      </h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gray-700 text-lg text-center mb-6"
      >
        Hello! 👋 I’m a passionate <span className="font-semibold">CSE student</span> currently exploring the 
        world of <span className="text-blue-600 font-semibold">web development</span>. 
        I have worked with <span className="font-semibold">C</span> and <span className="font-semibold">C++</span>, 
        but when I discovered <span className="font-semibold text-yellow-600">JavaScript</span> and 
        <span className="font-semibold text-yellow-600"> React</span>, I found them more exciting than any other language!
      </motion.p>

      {/* Cards Container (Centered) */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Programming Journey */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaLaptopCode className="text-blue-600" /> My Programming Journey
          </h3>
          <p className="text-gray-700 mt-2">
            I started with <span className="font-semibold">C and C++</span>, then explored{" "}
            <span className="font-semibold">HTML, CSS, and JavaScript</span>. Now, I am diving deeper into{" "}
            <span className="font-semibold">React.js & Next.js</span>.
          </p>
        </motion.div>

        {/* What I Enjoy Working On */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: -50 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" /> What I Enjoy Working On
          </h3>
          <p className="text-gray-700 mt-2">
            I love creating <span className="font-semibold">user-friendly web applications</span>, 
            working with **API integrations**, and exploring new technologies.
          </p>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaMusic className="text-pink-500" /> Beyond Programming
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>🎵 Listening to music</li>
            <li>💻 Exploring new tech trends</li>
          </ul>
        </motion.div>

        {/* Personality */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: -50 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="bg-white p-6 rounded-lg shadow-lg w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaSmile className="text-green-500" /> My Personality
          </h3>
          <p className="text-gray-700 mt-2">
            I am <span className="font-semibold">curious, detail-oriented</span>, and enjoy **continuous learning**.  
            I take my work seriously, but I also **value creativity & fun** along the way! 🎨🚀
          </p>
        </motion.div>
      </div>
    </div>
   {/* About me start here */}
  
    </div>
  )
}

export default App
