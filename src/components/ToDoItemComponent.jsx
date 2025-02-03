import React from "react";

function ToDoItemComponent({ allToDos, setAllToDos }) {
  function removeTodo(id) {
    let filteredArray = allToDos.filter((el) => el.id !== id);
    setAllToDos(filteredArray);
  }
  return (
    <div className="my-[10px] flex flex-col justify-center items-center rounded-sm py-[10px] px-[5px]">
      {allToDos.length > 0 ? (
        allToDos.map((el, i) => {
          return (
            <div
              className="flex justify-center items-center gap-5 my-2 bg-slate-900 p-2 rounded-sm"
              key={i}
            >
              <p className="bg-white p-1 rounded-sm">{el.title}</p>
              <button
                onClick={() => removeTodo(el.id)}
                className="bg-red-600 px-5 py-2 rounded-md text-black"
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <h2 className="font-extrabold text-red-700">
          There isn't any ToDo today.
        </h2>
      )}
    </div>
  );
}

export default ToDoItemComponent;
