import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";

const AddTaskForm = (props) => {
  return (
    <div className="form-container" style={props.style}>
      {/* {props.popupStatus?( <div>Rower</div>) : ( <div>Wojtek?</div>)} */}
      <div className="form-main">
        <div className="close-bar">
          <div className="close-button" onClick={props.hideFormAction}>
            <span>
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input-title">
            <label>Please provide a task name</label>{" "}
            <textarea
              style={styleTextArea}
              type="text"
              name="taskTitle"
              onChange={props.editTask}
              onSubmit={props.clearInput}
              value={props.title}
              placeholder="Write task name"
              cols="40"
              rows="4"
              maxlength="50"
            />
          </div>
          <div className="add-input-priority">
            <label>Priority: </label>
            <select
              name="taskPriority"
              id="taskPriorityID"
              onChange={props.editTask}
              value={props.priority}
              onSubmit={props.clearInput}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="add-input-done">
            <label>If task is done:</label>
            <input
              type="checkbox"
              name="taskStatus"
              onChange={props.editStatus}
              checked={props.status}
              id="statusCheckBox"
            />
            <label for={"statusCheckBox"}></label>
          </div>
          <div className="submit-conainer">
            <input type="submit" onClick={props.clearInputs} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTaskForm;

function handleSubmit(event) {
  event.preventDefault();
}

const styleTextArea = {
  resize: "none",
};
