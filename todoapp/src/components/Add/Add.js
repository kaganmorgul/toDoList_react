import React, { useState } from "react";
import "./add.scss";
import Info from "../Info/Info";
import Tasklist from "../Tasklist/Tasklist";

function Add() {
  const [value, setValue] = useState("");
  const [listItems, setlistItems] = useState([]);
  const [deletedTask, setdeletedTask] = useState([]);
  const [completedTask, setcompletedTask] = useState([]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    setlistItems([...listItems, value]);
    setValue("");
  };

  return (
    <div className="Add">
      <div className="searchtask">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input id="searchtask" type={"text"} placeholder="Search Task" />
      </div>
      <form id="addtaskform" onSubmit={addTask}>
        <div className="addtask">
          <i className="fa-solid fa-plus"></i>
          <input
            id="taskinput"
            type={"text"}
            value={value}
            onChange={onChangeInput}
            placeholder="Add Task"
          />
        </div>
        <button type="submit " className="addtaskbutton">
          Add Task
        </button>
      </form>
      <Info
        listItems={listItems}
        deletedTask={deletedTask}
        setdeletedTask={setdeletedTask}
        completedTask={completedTask}
        setcompletedTask={setcompletedTask}
      />
      <Tasklist
        listItems={listItems}
        setlistItems={setlistItems}
        setValue={setValue}
        deletedTask={deletedTask}
        setdeletedTask={setdeletedTask}
        completedTask={completedTask}
        setcompletedTask={setcompletedTask}
      />
    </div>
  );
}

export default Add;
