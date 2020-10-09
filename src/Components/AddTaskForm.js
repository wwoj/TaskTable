import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTaskForm = (props) => {
  return (
    <div className="add-form-container">
      <div className="add-Task-icon">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="add-input-title">
          <label> Task Name</label>{" "}
          <input
            type="text"
            name="taskTitle"
            onChange={props.editTask}
            onSubmit={props.clearInput}
            value={props.title}
            placeholder="Write task name"
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
        <input type="submit" onClick={props.clearInputs} />
      </form>
    </div>
  );
};
export default AddTaskForm;

function handleSubmit(event) {
  event.preventDefault();
}
