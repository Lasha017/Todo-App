import React, { useEffect, useState } from "react";
import "./Todo.css";
import image from "./../assets/moon.svg";
import favicon from "./../assets/favicon.png";

const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  useEffect(() => {
    document.title = "Todo app";
  }, []);

  function addTask(event) {
    if (input !== "") {
      setTask((prev) => [
        ...prev,
        { id: prev.length + 1, text: input, completed: false },
      ]);
      clearInput();
    } else {
      alert("Fill the gap or enter different information!");
    }
  }

  function clearInput() {
    setInput("");
  }

  const saveToLocalStorage = () => {
    localStorage.setItem("ToDo -->", JSON.stringify(task));
  };
  const removeFromLocalStorage = (task) => {
    localStorage.removeItem(task);
  };
  useEffect(() => {
    saveToLocalStorage();
  }, [input]);

  function deleteList(text) {
    setTask((prev) => prev.filter((i, item) => item !== text));
    removeFromLocalStorage();
  }

  function checkedTodo(id) {
    setTask((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  }

  return (
    <>
      <link rel="icon" type="image/x-icon" href={`${favicon}`} />
      <div className="container">
        <header>
          <h1>T O D O</h1>
          <img src={image} alt="Todo Image" />
        </header>
        <div className="input-box">
          <div className="upperInput">
            <input type="checkbox" className="checkbox" id="chk" />
            <input
              type="text"
              placeholder="Create a new todo…"
              className="input"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setInput(e.target.value);
                  addTask();
                }
              }}
            />
          </div>
          <div>
            {task.map((item, index) => {
              return (
                <div className="mapped">
                  <div style={{ display: "flex" }} className="taskList">
                    <div className="space-between">
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={item.completed}
                        onChange={() => checkedTodo(item.id)}
                      />
                      <li
                        style={{
                          textDecoration: item.completed
                            ? "line-through" 
                            : "none", 
                          color: item.completed ? "gray" : "black"
                        }}
                      >
                        {item.text}
                      </li>
                    </div>
                    <button
                      onClick={() => deleteList(index)}
                      className="deleteBtn"
                    >
                      X
                    </button>
                  </div>
                  
                </div>
              );
            })}
            <div className="footer">
              <div>{task.filter((item) => !item.completed).length} items left</div>
              <div className="responsiveDisplayNone">
                <span>All</span><span>Active</span><span>Completed</span>
              </div>
              <div>Clear Completed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
