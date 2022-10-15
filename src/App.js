import "./App.css";

import { useState } from "react";
import Tasks from "./components/tasks/Tasks";

function App() {
  const [buttonToggle, setbuttonToggle] = useState(true);

  const [formData, setformData] = useState([]);

  const [counter, setCounter] = useState(0);

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

    let a = formData.filter((item) => {
      return item.id.toString() !== e.target.id.toString();
    });

    // setformData(
    //   a
    // );

    if (e.target.id.toString() !== (counter - 1).toString()) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].id > e.target.id) {
          a[i].id--;
        }
      }
    }
    setCounter((prev) => prev - 1);
    setformData(a);
  };

  const handleClass = (e) => {
    e.preventDefault();
    // console.log(e.target.tagName)
    let myItem = e.target.closest("li");

    if (e.target.tagName !== "I") {
      let selected = formData.find((item) => {
        return item.id.toString() === myItem.id.toString();
      }); //console.log(item.id), console.log(e.target.id)

      let newData = formData.filter((item) => {
        return item.id.toString() !== selected.id.toString();
      });

      newData.splice(selected.id, 0, {
        id: selected.id,
        task: selected.task,
        time: selected.time,
        done:
          selected.done === "true"
            ? (selected.done = "false")
            : (selected.done = "true"),
      });

      console.log(selected.id);
      console.log(counter);
      setformData(newData);
      // setformData(
      //   [...newData, {id: selected.id, task:selected.task, time: selected.time, done: selected.done === "true" ? selected.done = "false": selected.done= "true"}]
      // )
    }
    // let selected = formData.find((item) => item.time === myItem.innerText || item.task === myItem.innerText);
  };
  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <button onClick={handleToggle}>
        {buttonToggle ? "Close" : "Show"} Add Task Bar
      </button>
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
