import React from "react";
import Input from "../Components/Input";
import ShowTodo from "../Components/ShowTodo";
import ShowTotal from "../Components/ShowTotal";
import ShowPercentage from "../Components/ShowPercentage";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Title from "../Components/Title";

function ToDo() {
  return (
    <div className="p-4">
      <Link to="/">
        <FaArrowLeftLong />
      </Link>
      <div className="flex flex-col w-full px-4 gap-10 mt-10 justify-center items-center">
        <Title className="text-2xl gont-bold">
          Enter your tasks based on priority.
        </Title>
        <Input />
        <ShowPercentage />
        <ShowTodo />
        <ShowTotal />
      </div>
    </div>
  );
}

export default ToDo;
