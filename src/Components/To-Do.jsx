import React from "react";
import Input from "./Input";
import ShowTodo from "./ShowTodo";
import ShowTotal from "./ShowTotal";
import ShowPercentage from "./ShowPercentage";

function ToDo() {
  return (
    <div className="flex flex-col gap-10 mt-10 justify-center items-center">
      <h1 className="text-2xl text-center sm:text-5xl ">Enter your tasks based on priority.</h1>
      <Input />
      <ShowPercentage />
      <ShowTodo />
      <ShowTotal />
    </div>
  );
}

export default ToDo;
