import React from "react";
// import bgImage from "../assets/To-Do-App.jpg";
import bgImage from "../assets/imageone.jpg";
import Button from "../Components/Button";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Home() {
  console.log("home");
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        width: "100%",
        height: "100vh",
      }}
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl sm:text-9xl font-bold">To-Do-App</h1>
        <p className="text-2xl text-wrap text-center sm:text-5xl ">
          click the start button to test my app
        </p>
        <Button />
        <div className="w-full relative flex flex-col gap-8 justify-center items-center ">
          <div className="flex gap-8 justify-center items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/reza-akbari-front-end">
              <FaLinkedin size={20} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/reza-akbari-front-end">
              <FaTelegram size={20} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/RezaFrontEndDeveloper/Modern-To-Do-App">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
