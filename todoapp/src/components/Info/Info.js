import React, { useState } from "react";
import "./info.scss";

function Info({
  listItems,
  deletedTask,
  completedTask,
}) {
  const [showCompleted, setshowCompleted] = useState(false);
  const [showDeleted, setshowDeleted] = useState(false);

  const showCompletedTasks = () => {
    showCompleted === false ? setshowCompleted(true) : setshowCompleted(false);
  };
  const showDeletedTasks = () => {
    showDeleted === false ? setshowDeleted(true) : setshowDeleted(false);
  };

  return (
    <div className="Info">
      <div className="taskcount">
        <div className="alltasks">
          <button type="button">Current Tasks: {listItems.length}</button>
        </div>
      </div>
      <div className="completedanddeletestask">
        <div className="completedtask ">
          <button onClick={showCompletedTasks} type="button">
            Completed Tasks: {completedTask.length}
          </button>
          {showCompleted &&  completedTask.length > 0 && (
            <div className="completedtaskitems tasks">
              <ul>
                {completedTask.map((i, index) => (
                  <li>{`${index + 1}: ${i}`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="deletedtask ">
          <button onClick={showDeletedTasks} type="button">
            Deleted tasks: {deletedTask.length}
          </button>
          {showDeleted && deletedTask.length > 0 && (
            <div className="deletedtaskitems tasks">
              <ul>
                {deletedTask.map((i, index) => (
                  <li>{`${index + 1}: ${i}`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Info;
