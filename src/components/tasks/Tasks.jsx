import React from "react";
import "./Tasks.css";
// import { useState } from "react";

const Tasks = ({ data, func, toggleClass }) => {
  return (
    <div className="taskContainer scrollbar" id="style-6">
      <ul className="force-overflow">
        {data.map((item) => {
          return (
            <li
              key={item.id}
              done={item.done}
              onClick={toggleClass}
              id={item.id}
            >
              <div className={item.done}>
                <div className="flex">
                  <i className="fa-solid fa-list-check"></i>
                  <p>{item.task}</p>
                </div>
                <div className="flex">
                  <i className="fa-solid fa-clock"></i>
                  <p className="time">{item.time}</p>
                </div>
              </div>

              <div>
                <i
                  className="fa-solid fa-xmark"
                  onClick={func}
                  id={item.id}
                ></i>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
