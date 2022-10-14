import React from "react";
import "./Tasks.css";
// import { useState } from "react";

const Tasks = ({ data, func, toggleClass }) => {
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id} done={item.done}>
              <div onClick={toggleClass}>
                <div className="flex">
                <i className="fa-solid fa-clock"></i>
                  <p className={item.done}>{item.task}</p>

                </div>
                <div className="flex">
                <i className="fa-solid fa-list-check"></i>
                  <p className={item.done}>{item.time}</p>

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
