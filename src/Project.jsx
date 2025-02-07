import Img1 from '../src/assets/demo/Screenshot 2025-02-07 125100.png';
import Img2 from '../src/assets/demo/Screenshot 2025-02-07 125118.png';
import Img3 from '../src/assets/demo/Screenshot 2025-02-07 125135.png';
import Img4 from '../src/assets/demo/Screenshot 2025-02-07 125143.png';
import Img5 from '../src/assets/demo/Screenshot 2025-02-07 125157.png';
import Img6 from '../src/assets/demo/Screenshot 2025-02-07 125333.png';
import Img from '../src/assets/demo/Screenshot 2025-02-07 125406.png';
import img from '../src/assets/demo-2/Screenshot 2025-02-05 180952.png';
import img1 from '../src/assets/demo-2/Screenshot 2025-02-07 133319.png';
import img2 from '../src/assets/demo-2/Screenshot 2025-02-07 133410.png';
import img3 from '../src/assets/demo-2/Screenshot 2025-02-07 133410.png';
import img4 from '../src/assets/demo-2/Screenshot 2025-02-07 133500.png';
import img5 from '../src/assets/demo-2/Screenshot 2025-02-07 133435.png';
import img6 from '../src/assets/demo-3/Screenshot 2025-02-07 134848.png';
import img7 from '../src/assets/demo-3/Screenshot 2025-02-07 134906.png';
import img8 from '../src/assets/demo-3/Screenshot 2025-02-07 134919.png';
import img9 from '../src/assets/demo-3/Screenshot 2025-02-07 135020.png';
import img10 from '../src/assets/demo-3/Screenshot 2025-02-07 135114.png';
import img11 from '../src/assets/demo-3/Screenshot 2025-02-07 135131.png';
import img12 from '../src/assets/demo-3/Screenshot 2025-02-07 135145.png';
import img13 from '../src/assets/demo-3/Screenshot 2025-02-07 134848.png';
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      name: "Movie Portal",
      image: "https://linktoimage.com/movieportal.jpg",
      images: [Img1, Img2, Img3, Img4, Img5, Img6,Img], 
      description: "A platform to explore movies, view details, and manage favorite movies.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://movie-buzz-e0a92.web.app/",
      githubLink: "https://github.com/username/movieportal-client",
      viewLink: "https://movie-buzz-e0a92.web.app/allmovie",
      challenges: [
        "Designing a dynamic UI for movie categories",
        "Implementing authentication and user sessions",
        
      ],
      potentialImprovements: [
        "Adding movie recommendation engine",
        "Implementing a rating system for users",
        
      ]
    },
    {
      name: "MIcro-Job & Earn",
      image: "https://linktoimage.com/gadgetheaven.jpg",
      images: [img6, img7, img8, img9, img10, img11,img12,img13], 
      description: "Earnify is an earning platform that is designed to connect workers and buyers.",
      techStack: ["React", "Tailwind CSS", "Context API", "Node.js"],
      liveLink: "https://assignment-12-6a1a7.web.app/",
      viewLink: "https://food-shearing.web.app/",
      githubLink: "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-FarjanaEti",
      challenges: [
        "Handling large product data efficiently",
        "Managing user sessions with authentication",
        
      ],
      potentialImprovements: [
        "Adding product recommendation system",
        "Implementing better performance optimization",
        
      ]
    },
    {
      name: "Food Delivery App",
      image: "https://linktoimage.com/fooddeliveryapp.jpg",
      images: [img, img2, img3, img4, img5, img1],
      description: "Purpose of our page is to connect the people who want to share surplus food with those in need.",
      techStack: ["React", "Redux", "Firebase", "Tailwind CSS"],
      liveLink: "https://fooddeliveryapp.com",
      viewLink: "https://food-shearing.web.app/allFood",
      githubLink: "https://github.com/programming-hero-web-course2/b10a11-client-side-FarjanaEti",
      challenges: [
        
        "Handling real-time order updates",
        "Integrating secure payment processing"
      ],
      potentialImprovements: [
        "Adding user reviews and ratings for food items",
        "Improving search functionality with better filters",
        
      ]
    }
  ];

  return (
    <div className="container bg-[#FCE7C8] mt-20 mx-auto py-5 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -150 : 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: index * 0.3 }}
            className="card  mx-auto w-[900px] lg:card-side bg-base-100 shadow-xl p-5"
          >
            {/* Image Container */}
            <div className="card bg-base-100 h-96 w-72 shadow-xl overflow-hidden group">
              <figure className="relative w-full h-72 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] transition-transform duration-[4000ms] group-hover:translate-y-[-1550px]">
                  {project.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      className="w-full h-64 object-cover"
                      src={image}
                      alt={`Image ${imgIndex + 1}`}
                    />
                  ))}
                </div>
              </figure>
              {/* Card Body */}
              <div className="my-3 items-center text-center">
                <h2 className="text-2xl font-bold">Project Demo</h2>
              </div>
            </div>
            <div className="card-body -mt-3 lg:w-2/3">
              <h2 className="card-title text-2xl font-bold">{project.name}</h2>
              <p className="text-gray-600  border-t border-b p-2">{project.description}</p>

              <div className="">
                <h4 className="font-bold my-2 text-start text-gray-700">Technology stack:</h4>
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge badge-neutral">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="">
            <h4 className="font-bold text-start text-gray-700">Challenge:</h4>
            <ul className="text-gray-600">
              {project.challenges.map((challenge, index) => (
                <li key={index}>- {challenge}</li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold text-start text-gray-700">Improvement:</h4>
            <ul className="text-gray-600">
              {project.potentialImprovements.map((improvement, index) => (
                <li key={index}>- {improvement}</li>
              ))}
            </ul>
          </div>
              <div className="card-actions">
                <a href={project.liveLink} className="btn btn-primary">Live Project</a>
                <a href={project.githubLink} className="btn btn-secondary">GitHub Repo</a>
                <a href={project.githubLink} className="btn btn-accent">View More</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
