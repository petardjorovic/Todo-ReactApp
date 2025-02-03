import { useEffect, useState } from "react";
import ToDoItemComponent from "./components/ToDoItemComponent";
import ToDoInputComponent from "./components/ToDoInputComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [allToDos, setAllToDos] = useState([]);

  useEffect(() => {
    console.log(allToDos);
  }, [allToDos]);

  return (
    <div className="flex flex-col justify-center items-center my-[100px] bg-blue-400 p-10">
      {/* ToDo Input */}
      <ToDoInputComponent allToDos={allToDos} setAllToDos={setAllToDos} />
      {/* ToDo Output */}
      <ToDoItemComponent allToDos={allToDos} setAllToDos={setAllToDos} />
    </div>
  );
}

export default App;
