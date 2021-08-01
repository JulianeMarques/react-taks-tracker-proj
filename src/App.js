import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Ir ao medico",
      day: "Feb5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Ir ao mercado",
      day: "March 5th at 6:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Ir na vovo",
      day: "Feb 6th at 4:30pm",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Hello Jules</h1>
      <Header />
      {tasks.lenght > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks =)"
      )}
    </div>
  );
}

export default App;
