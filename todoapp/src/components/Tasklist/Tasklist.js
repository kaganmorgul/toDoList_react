import React from "react";
import "./tasklist.scss";

function Tasklist({listItems, setlistItems }) {
  return (
    <div className="Tasklist">
      <ul>
        {listItems.map((item , index) => (
          <li key={index}>
            <div className="list-item">
              <div className="list-item-icons">
                <button type="button">
                  <i className="fa-solid fa-arrows-rotate"></i>
                </button>
                <button type="button">
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
              <div>
                <p>{item}</p>
              </div>
              <div>
                <button type="button">
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
