import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const TableNav = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="table-navigation">
      <div>
        <span>Rows per page: </span>
        <select name="postsPerPage" onChange={props.hangePostPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <div>
        {props.firstTask}-
        {props.lastTask > props.totalTasks ? props.totalTasks : props.lastTask}{" "}
        of {props.totalTasks}
      </div>
      <button onClick={props.changePagePrevious}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </button>
      {props.lastTask >= props.totalTasks ? (
        <button>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>
      ) : (
        <button onClick={props.changePageNext}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>
      )}
    </nav>
  );
};
export default TableNav;
