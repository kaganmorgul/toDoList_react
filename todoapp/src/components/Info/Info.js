import React from "react";
import "./info.scss";

function Info({
  listItems,
  deletedTask,
  setdeletedTask,
  completedTask,
  setcompletedTask,
}) {
  return (
    <div className="Info">
      <div className="taskcount">
        <div className="alltasks">
          <button type="button">All Tasks: {listItems.length}</button>
        </div>
      </div>
      <div className="completedanddeletestask">
        <div className="completedtask">
          <button onClick={() => alert(completedTask)} type="button">
            Completed Tasks: {completedTask.length}
          </button>
        </div>
        <div className="deletedtask">
          <button onClick={() => alert(deletedTask)} type="button">
            Deleted tasks: {deletedTask.length}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
