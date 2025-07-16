import { useState } from "react";

function ToDolist() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [randomName, setRandomName] = useState("");

  const randomNameHandler = () => {
    if (tasks.length === 0) return;

    const randomIndex = Math.floor(Math.random() * tasks.length);

    setRandomName(tasks[randomIndex]);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const taskHandler = () => {
    setTasks((prev) => {
      return [...prev, name];
    });
  };

  const startOverHandler = () => {
    setRandomName("");
    setTasks([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">Who pays the bill?</h1>
      <form action="">
        <input
          className="p-2 mb-2"
          type="text"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
      </form>
      <button
        className="p-2 bg-blue-400 text-white rounded mb-5 uppercase"
        onClick={taskHandler}
      >
        Add Player
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li className="border-2 w-20" key={index}>
            {task}
          </li>
        ))}
      </ul>
      <button
        className="p-2 bg-purple-400 text-white w-20 ml-56 uppercase"
        onClick={randomNameHandler}
      >
        Next
      </button>
      <h1 className="text-3xl mt-10 mb-5">Who pays the bill?</h1>
      <p className="text-blue-400 text-2xl mb-5">The looser is:</p>
      <p className="text-3xl mb-5">{randomName}</p>

      <div className="flex gap-5">
        <button
          className="p-3 bg-purple-400 text-white uppercase"
          onClick={randomNameHandler}
        >
          get new looser
        </button>
        <button
          className="p-3 bg-purple-400 text-white uppercase"
          onClick={startOverHandler}
        >
          Start Over
        </button>
      </div>
    </div>
  );
}

export default ToDolist;
