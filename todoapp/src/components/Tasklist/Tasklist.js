import "./tasklist.scss";

function Tasklist({
  listItems,
  setlistItems,
  deletedTask,
  setdeletedTask,
  completedTask,
  setcompletedTask,
}) {
  // delete item function
  const deleteTask = (indis) => {
    const newList = listItems.filter((i, index) => index !== indis);
    setlistItems(newList);
  };
  // after deleted create deleted items list
  const deletedTaskList = (indis) => {
    const deletedItemList = listItems.filter((i, index) => index === indis);
    setdeletedTask([...deletedTask, deletedItemList]);
  };

  //completed task List
  const completedTaskList = (e, indis) => {
    const newList = listItems.filter((i, index) => index === indis);
    setcompletedTask([...completedTask, newList]);

    const AfterCompleted = listItems.filter((e, index) => index !== indis);
    setlistItems(AfterCompleted);
  };
  return (
    <div className="Tasklist">
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            <div className="list-item">
              <div className="list-item-icons">
                <i
                  className="fa-solid fa-check"
                  onClick={(e) => {
                    completedTaskList(e, index);
                  }}
                ></i>
              </div>
              <div>
                <p>{item}</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={(e) => {
                    deleteTask(index);
                    deletedTaskList(index);
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
