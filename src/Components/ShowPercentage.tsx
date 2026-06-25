import React from "react";
import todoStore from "../store/todoStore";

function ShowPercentage() {
  const todos = todoStore((state) => state.todos) ?? [];
  const store = todoStore();
  console.log(store);
  const total = todos.length;
  const trueisDone = todos.filter((item) => item.isDone === true).length;

  const percent = total === 0 ? 0 : (trueisDone / total) * 100;

  return (
    <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-4">
      <p>{Math.round(percent)}% is done</p>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={
            percent === 100
              ? "bg-green-500 h-4 transition-all duration-700 ease-out"
              : "bg-blue-500 h-4 transition-all duration-700 ease-out"
          }
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default ShowPercentage;
