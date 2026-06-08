import React from "react";
import Input from "./Input";
import ShowTodo from "./ShowTodo";
import ShowTotal from "./ShowTotal";
import ShowPercentage from "./ShowPercentage";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ToDo() {
  return (
    <div className="p-4">
      <Link to="/">
        <FaArrowLeftLong className="" />
      </Link>
      <div className="flex flex-col w-full px-4 gap-10 mt-10 justify-center items-center">
        <h1 className="text-2xl text-center sm:text-5xl ">Enter your tasks based on priority.</h1>
        <Input />
        <ShowPercentage />
        <ShowTodo />
        <ShowTotal />
      </div>
    </div>
  );
}

export default ToDo;
