import React from "react";
const TaskRow = (props) => {
  if (props.posts.length === 0) {
    return (
      <tbody>
        <tr>
          <td>Loading....</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {props.posts.map((post, index) => (
        <tr
          key={index}
          className="list-group-item"
          id={index + props.indexMain}
        >
          <td>{post.Task_Name} </td>
          <td>{post.Priority} </td>
          <td id={index + props.indexMain}>
            <input
              className="edit-checkbox"
              type="checkbox"
              id={index + props.indexMain+"_DoneCheckBox"}
              checked={post.Status}
              onClick={props.onChangeCheckBox}
            />
            <label for={index + props.indexMain+"_DoneCheckBox"}></label>
          </td>
          <td>
            <img
              className="delete-icon"
              src="https://st2.depositphotos.com/5266903/8456/v/450/depositphotos_84569362-stock-illustration-trash-can-flat-yellow-color.jpg"
              alt="trash-icon"
              onClick={props.deleteTask}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default TaskRow;
