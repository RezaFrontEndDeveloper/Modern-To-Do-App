import React from "react";
import bgImage from "../assets/pexels-iamdibh-17405734.jpg";
import Button from "./Button";

function Home() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})`, width: "100%", height: "100vh" }} className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl sm:text-9xl font-bold">To-Do-App</h1>
        <p className="text-2xl text-wrap  sm:text-5xl ">click the start button to test my app</p>
        <Button />
      </div>
    </div>
  );
}

export default Home;
