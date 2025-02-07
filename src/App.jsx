import './App.css'
import { MdOutlineLabelImportant } from "react-icons/md";
import developerImg from '../src/assets/icons/eti-3.png';
import { FaCss3Alt, FaDatabase, FaEnvelope, FaFacebook, FaGithub, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaPhone, FaReact, FaSmile, FaWhatsapp } from 'react-icons/fa';
import { FaLaptopCode, FaMusic, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiTailwindCssLine } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';
import Project from './Project';



function App() {
  return (
    <div>
     {/* navbar start */}
     <div className="navbar sticky top-0 z-50 bg-transparent shadow-sm">
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
        <li><a href="#home">Home</a></li>
  <li><a href="#about">About Me</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact Me</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <MdOutlineLabelImportant />
      E <span className='text-amber-600'>T</span>I</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href="#home">Home</a></li>
  <li><a href="#about">About Me</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact Me</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Resume</a>
  </div>
</div>
     {/* navbar ends */}

  {/* Banner start here */}
  <div
  className="head bg-no-repeat bg-left-top 
  md:bg-[url('../src/assets/icons/header_bg.png')] md:bg-right-bottom" id='home'
>
  <div className="banner flex flex-col md:flex-row justify-between items-center">
    {/* Left Content */}
    <div className="banner-content md:ml-32  max-w-[580px] text-center md:text-left">
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

      <motion.h1 className='text-2xl font-bold' animate={{ color: ['#FFB4A2', '#FFEFC8', '#B5828C'] }}
                transition={{ duration: 1.5, repeat: Infinity }}>Your friendly neighborhood frontend developer, UX architect, and a CSE Student </motion.h1>

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
        <button className=" btn bg-[#FCE7C8]  px-6 py-2 rounded-lg mr-4">
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
   <div id='about' className="max-w-7xl mt-20 mx-auto p-10 bg-gradient-to-r from-[#FFCDB2] to-[#FCE7C8] shadow-xl rounded-lg">
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
        Hello!  I’m a passionate <span className="font-semibold">CSE student</span> currently exploring the 
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
          className="bg-white p-6 rounded-lg shadow-lg w-[500px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
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
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
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
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
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
          className="bg-white p-6 rounded-lg shadow-lg w-[300px] md:w-[500px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaSmile className="text-green-500" /> My Personality
          </h3>
          <p className="text-gray-700 mt-2">
            I am <span className="font-semibold">curious, detail-oriented</span>, and enjoy **continuous learning**.  
            I take my work seriously, but I also **value creativity & fun** along the way! 
          </p>
        </motion.div>
      </div>
    </div>
   {/* About me start here */}
  
  {/* Skill section start*/}
  <div  className="w-full mt-20 p-10 bg-[#FCE7C8] text-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold ">Skills I have gained so far...</h2>
        <p className="text-gray-600 mt-2">I am a passionate and dedicated web developer skilled in modern technologies like <span style={{
          backgroundImage: "linear-gradient(#F948B2, #8758F1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}> HTML, CSS, JavaScript, React, Node.js, MongoDB, Firebase, Tailwind, and DaisyUI </span> With a strong foundation in frontend and backend development, I enjoy building dynamic, user-friendly applications. Always eager to learn and grow, I strive to create seamless digital experiences with efficient and scalable code</p>
      </div>
      
      <h3 className="mt-10 text-xl font-semibold">Skills</h3>
      <div className="md:flex justify-center gap-6 mt-4">
        <div className="md:w-20 h-20  bg-gray-200 rounded-lg shadow">
          <h1 className='text-xl mt-1 font-semibold'>Html</h1>
          <FaHtml5 className="text-orange-500 ml-5 mt-2 text-4xl" />
        </div>
        <div className="md:w-20 h-20  bg-gray-200 rounded-lg shadow">
        <h1 className='text-xl mt-1 font-semibold'>Css</h1>
          <FaCss3Alt className="text-blue-500 ml-5 mt-2 text-4xl" />
        </div>
        <div className="md:w-20 h-20 bg-gray-200 rounded-lg shadow">
        <h1 className='text-xl mt-1 font-semibold'>JS</h1>
          <FaJs className="text-yellow-500 ml-5 mt-2 text-4xl" />
        </div>
        <div className="md:w-20 h-20  bg-gray-200 rounded-lg shadow">
        <h1 className='text-xl mt-1 font-semibold'>React</h1>
          <FaReact className="text-blue-400 ml-5 mt-2  text-4xl" />
        </div>
        <div className="md:w-20 h-20 bg-gray-200 rounded-lg shadow">
        <h1 className='text-xl mt-1 font-semibold'>Node Js</h1>
          <FaNodeJs className="text-green-500 ml-5 mt-2 text-4xl" />
        </div>
        <div className="md:w-28 h-20 bg-gray-200 rounded-lg shadow">
        <h1 className='text-xl mt-1 font-semibold'>MongoDB</h1>
          <FaDatabase className="text-gray-600 ml-5 mt-2 text-4xl" />
        </div>
        <div className="md:w-28 h-20 bg-gray-200 rounded-lg shadow">
        <h1 className='text-xl mt-1 font-semibold'>Tailwind</h1>
        <RiTailwindCssLine className="text-blue-500 ml-6 mt-2 text-4xl" />  
        </div>
        <div className="md:w-28 h-20 bg-gray-200 rounded-lg shadow">
        <h1 className='text-xl mt-1 font-semibold'>Firebase</h1>
        <IoLogoFirebase className="text-orange-400 ml-7 mt-2 text-4xl" />
        </div>
      </div>
    </div>
  {/* Skill section ends */}

  {/* education section start */}
  <section className="p-8 bg-[#FFCDB2] rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center  mb-6">Education</h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">🎓 Bachelors in Computer Science & Engineering</h3>
        <p className="text-gray-700"> Institute of science and technology</p>
        <p className="text-gray-600"> 3rd Year, 6th Semester (Expected Graduation: 2026)</p>
        <p className="text-gray-800 font-medium"> Last Semester CGPA: <span className="text-green-600 font-bold">4.00</span></p>
        <p className="text-gray-800 font-medium"> Average CGPA: <span className="text-blue-600 font-bold">3.76</span></p>
      </div>
    </section>
  {/* education section ends */}

  {/* project section start */}
  
  <div id='projects'>
      <Project /> 
    </div>
  {/* project section ends */}
 
 {/* Contact  */}
 <section id='contact' className="bg-[#FFB4A2] mt-20 p-8 rounded-lg shadow-md  mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Get in touch or shoot me an email directly on etimourakkhieti@gmail.com</h2>
      <p className="text-gray-700 mb-6">Feel free to reach out to me through any of the methods below.</p>

      <div className="flex flex-col gap-4 items-center">
        <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-blue-600 hover:underline">
          <FaEnvelope />etimourakkhieti@gmail .com
        </a>

        <a href="tel:+1234567890" className="flex items-center gap-2 text-blue-600 hover:underline">
          <FaPhone /> 01707505945
        </a>

        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
          <FaWhatsapp /> 01707505945
        </a>
      </div>
    </section>
  
    </div>
  )
}

export default App
