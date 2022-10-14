import "./App.css";

import { useState } from "react";
import Tasks from "./components/tasks/Tasks";

function App() {
  const [buttonToggle, setbuttonToggle] = useState(true);

  const [formData, setformData] = useState([]);

  const [counter, setCounter] = useState(1);

  const [input, setInput] = useState({
    id: 0,
    task: "",
    time: "",
    done: "false",
  });

  const handleToggle = (e) => {
    e.preventDefault();
    setbuttonToggle((prev) => (prev = !prev));
  };
  const handleInput = (e) => {
    e.preventDefault();
    setInput({ ...input, id: counter, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.time || !input.task) {
      alert("no");
    }

    if (input.time && input.task && formData.length < 3) {
      setCounter((prev) => prev + 1);
      setInput({ id: counter, task: "", time: "", done: "false" });
      setformData([
        ...formData,
        {
          id: counter,
          task: [input.task] || alert("no"),
          time: input.time || alert("no"),
          done: "false",
        },
      ]);
    }

  };

  const handleDelete = (e) => {
    e.preventDefault();
    let anan = formData.filter((item) => {

      return item.id != e.target.id;
    })
 
    setformData(
      anan
    );
  };

  const handleClass = (e) => {
    e.preventDefault();
    let myItem = e.target.closest("p");

    let selected = formData.find((item) => item.task == myItem.innerText || item.time == myItem.innerText);
    let newData = formData.filter((item) => {
      return item.task != selected.task
    })
    setformData(
      [...newData, {id: selected.id, task:selected.task, time: selected.time, done: selected.done === "true" ? selected.done = "false": selected.done= "true"}]
    )

  };
  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <button onClick={handleToggle}>Show Add Task Bar</button>
      <div>
        {buttonToggle && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input
              type="text"
              name="task"
              id="task"
              onChange={handleInput}
              value={input.task}
            />
            <label htmlFor="time">Tİme</label>
            <input
              type="text"
              name="time"
              id="time"
              value={input.time}
              onChange={handleInput}
            />
            <input type="submit" value="Save Task" className="submit" />
          </form>
        )}
      </div>
      <Tasks data={formData} func={handleDelete} toggleClass={handleClass} />
    </div>
  );
}

export default App;
