import React from "react";

import todoStore from "../store/todoStore";

function ShowTotal() {
  const todos = todoStore((state) => state.todos) || [];

  return (
    <div className="flex justify-center items-center gap-4 w-full sm:w-1/2">
      <div className="flex flex-1 flex-col justify-center items-center bg-gray-950 p-4 rounded-lg">
        <p className="text-green-600 text-green-400s">Total</p>
        <p>{todos.length}</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center bg-gray-950 p-4 rounded-lg">
        <p className="text-red-400">Done</p>
        <p>{todos.filter((item) => item.isDone === true).length}</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center bg-gray-950 p-4 rounded-lg">
        <p className="text-blue-500">Left</p>
        <p>{todos.filter((item) => item.isDone === false).length}</p>
      </div>
    </div>
  );
}

export default ShowTotal;
