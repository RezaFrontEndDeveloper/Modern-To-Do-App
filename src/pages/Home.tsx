import React from "react";
// import bgImage from "../assets/To-Do-App.jpg";
import bgImage from "../assets/pexels-iamdibh-17405734.jpg";
import Button from "../Components/Button";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import Social from "../Components/Social";
import Title from "../Components/Title";
import Paragraph from "../Components/Paragraph";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        width: "100%",
        height: "100vh",
      }}
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <Title className="text-5xl font-bold">Todo_App</Title>
        <Paragraph>click the start button to test my app</Paragraph>
        <Link to="/todo">
          <Button varient="primary">Start App</Button>
        </Link>

        <div className="flex justify-center items-center gap-4">
          <Social link="https://www.linkedin.com/in/reza-akbari-front-end">
            <FaLinkedin size={20} />
          </Social>

          <Social link="https://github.com/RezaFrontEndDeveloper?tab=repositories">
            <FaGithub size={20} />
          </Social>
        </div>
      </div>
    </div>
  );
}

export default Home;
