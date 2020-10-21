import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus,faTimes
} from "@fortawesome/free-solid-svg-icons";

const OpenButton = (props) => {
  return (
    <div className="open-button-container" style={props.style}>
  
        <button onClick={props.showFormAction}>
          <FontAwesomeIcon icon={faPlus} size="3x" />
        </button>
      
    </div>
  );
};
export default OpenButton;

function handleSubmit(event) {
  event.preventDefault();
}
