import { useContext, useState } from "react";
import { DataContext } from "../App";

export default function Input() {
  const { todos, setTodos } = useContext(DataContext);
  const [inputFild, setInputFild] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newToDos = {
      id: crypto.randomUUID(),
      work: inputFild,
      isDone: false,
    };

    setTodos([...todos, newToDos]);
    setInputFild("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center border gap-2 bg-gray-900 dark:border-gray-500/30 h-12 max-w-md w-full rounded-full overflow-hidden">
      <input
        value={inputFild}
        onChange={(e) => setInputFild(e.target.value)}
        type="text"
        placeholder="enter"
        className="w-full  h-full pl-6 outline-none text-sm placeholder-gray-400 text-white"
        required
      />
      <button type="submit" className="text-white px-4 py-2 mr-2 rounded-3xl text-center bg-[#7c6af7] ">
        send
      </button>
      {/* <Button /> */}
    </form>
  );
}

{
  /* <button type="submit" className="bg-indigo-500 active:scale-95 transition w-56 h-10 rounded-full text-sm text-white mr-1 flex items-center justify-center gap-1">
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6963 8.88475C12.6963 8.96959 12.68 9.04984 12.6566 9.12632L8.93489 5.12331L12.6963 2.19775V8.88475ZM1.64439 9.69807L5.41585 5.67917L6.8452 6.75954L8.2127 5.67248L12.046 9.69807C11.9863 9.71186 1.70415 9.71186 1.64439 9.69807ZM0.994078 8.88475V2.19775L4.75552 5.12331L1.03378 9.12632C1.01038 9.04984 0.994078 8.96959 0.994078 8.88475ZM12.2784 1.36188L6.8452 5.54125L1.41202 1.36188H12.2784ZM11.8605 0.526001H1.82995C0.906729 0.526001 0.158203 1.27453 0.158203 2.19775V8.88475C0.158203 9.80798 0.906729 10.5565 1.82995 10.5565H11.8605C12.7837 10.5565 13.5322 9.80798 13.5322 8.88475V2.19775C13.5322 1.27453 12.7837 0.526001 11.8605 0.526001Z"
            fill="white"
          />
        </svg>
        Add
      </button> */
}
