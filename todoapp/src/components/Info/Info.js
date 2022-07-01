import React from "react";
import "./info.scss";

function Info({ listItems, deletedTask, setdeletedTask }) {
  return (
    <div className="Info">
      <div className="taskcount">
        <div className="alltasks">
          <button type="button">All Tasks: {listItems.length}</button>
        </div>
      </div>
      <div className="completedanddeletestask">
        <div className="completedtask">
          <button type="button">Completed Tasks: 34</button>
        </div>
        <div className="deletedtask">
          <button onClick={()=> alert(deletedTask)} type="button">Deleted tasks: {deletedTask.length}</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
