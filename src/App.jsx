import './App.css'
import { MdOutlineLabelImportant } from "react-icons/md";
import developerImg from '../src/assets/icons/hardy.png';
//import headerBg from '../src/assets/icons/header_bg.png';

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
      <div className="banner flex justify-between   items-center">
        {/* Left Content */}
        <div className="banner-content max-w-[580px]">
          <h4 className="bnr-style text-[30px] font-bold text-gray-800" >Hi, I am</h4>
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
            Shot what able cold new see hold. Friendly as an betrayed formerly he.
            Morning because as to society behaved moments.
          </p>
          <div className="mt-6">
            <button className="btn-all bg-blue-500 text-white px-6 py-2 rounded-lg mr-4">
              Download CV
            </button>
            <button className="btn-all bg-gray-700 text-white px-6 py-2 rounded-lg">
              Contact
            </button>
          </div>
        </div>

        {/* Right Image */}
        <img src={developerImg} alt="Developer" className="bnr-img  rounded-lg " />
      </div>
    </div>

  {/* Banner ends here */}
    </div>
  )
}

export default App
