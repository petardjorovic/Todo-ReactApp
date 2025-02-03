import React, { useState } from "react";
import ToDoItemComponent from "./ToDoItemComponent";

function ToDoInputComponent({ allToDos, setAllToDos }) {
  const [currentInput, setCurrentInput] = useState("");

  function getInputValue(e) {
    let todo = e.target.value;
    setCurrentInput(todo);
  }

  function handleAddTodo() {
    if (currentInput) {
      setAllToDos([
        ...allToDos,
        { title: currentInput, id: new Date().getTime() },
      ]);
      setCurrentInput("");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <input
        type="text"
        placeholder="Insert ToDo"
        className="rounded-md p-1 w-[300px]"
        onChange={getInputValue}
        value={currentInput}
      />
      <button
        onClick={handleAddTodo}
        className="bg-orange-500 text-white rounded-md border-none outline-none py-2 px-4"
      >
        Add ToDo
      </button>
    </div>
  );
}

export default ToDoInputComponent;
