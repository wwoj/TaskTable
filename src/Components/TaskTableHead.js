import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
const Thead = (props) => {
  return (
    <thead>
      <tr>
        <th className="task-title">
          Task Name{" "}
          {!props.sortedTitleID ? (
            <button onClick={props.sortTitleDown}>
              <FontAwesomeIcon icon={faChevronUp} size="1x" />
            </button>
          ) : (
            <button onClick={props.sortTitleUp}>
              <FontAwesomeIcon icon={faChevronDown} size="1x" />
            </button>
          )}
        </th>
        <th className="task-priority">
          Priority{" "}
          {!props.sortedPriorityID ? (
            <button onClick={props.sortPriorityDown}>
              <FontAwesomeIcon icon={faChevronUp} size="1x" />
            </button>
          ) : (
            <button onClick={props.sortPriorityUp}>
              <FontAwesomeIcon icon={faChevronDown} size="1x" />
            </button>
          )}
        </th>
        <th className="task-done">
          Done{" "}
          {!props.sortedStatusID ? (
            <button onClick={props.sortStatusDown}>
              <FontAwesomeIcon icon={faChevronUp} size="1x" />
            </button>
          ) : (
            <button onClick={props.sortStatusUp}>
              <FontAwesomeIcon icon={faChevronDown} size="1x" />
            </button>
          )}
        </th>
        <th className="task-delete"></th>
      </tr>
    </thead>
  );
};
export default Thead;
