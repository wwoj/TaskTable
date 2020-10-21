import React, { Component } from "react";
import TaskRow from "./taskRow";
import { getLocalData, saveLocalData } from "../Services/lsTaskService";
import TableNav from "./TableNav";
import AddTaskForm from "./AddTaskForm";
import Thead from "./TaskTableHead";
import Popup from './Popup';
import OpenButton from './OpenForm';
import {
  compareUpName,
  compareDownName,
  compareUpPriority,
  compareDownPriority,
  compareUpStatus,
  compareDownStatus,
} from "../Services/sorting";
export default class TaskTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: [],
      post: false,
      setPosts: false,
      currentPage: 1,
      setCurrentPage: 1,
      postsPerPage: 5,
      setPostsPerPage: 10,
      taskTitle: "",
      taskPriority: "Low",
      taskStatus: false,
      sortedTitleID: 0,
      sortedPriorityID: 0,
      sortedStatusID: 0,
      visibilityPopup:false,
      popupStyle:{},
      taskAdded:false
    };
  }
  componentDidMount() {
    this.setState({ taskArray: getLocalData() });
  }
  
  hadleChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };
  hadleChangeCheckBox = (event) => {
    let name = event.target.name;
    let val = event.target.checked;
    this.setState({ [name]: val });
  };
  clearInput = (event) => {
    this.setState({ taskPriority: "Low", taskStatus: false, taskTitle: "" });
  };
  AddTaskToList = () => {
    let tempArray = [];
    let numberOfSpaces = 0;

    for (let i = 0; i < this.state.taskTitle.length; i++) {
      if (this.state.taskTitle[i] === " ") {
        numberOfSpaces += 1;
      }
    }
    if (this.state.taskArray != null) {
      tempArray = this.state.taskArray.map((elem) => elem);
    }
    if (
      this.state.taskTitle === "" ||
      this.state.taskTitle.length === numberOfSpaces
    ) {
      alert("You have tried to add empty task. Please write a task name.");
    } else {
      let newTask = {
        Task_Name: this.state.taskTitle,
        Priority: this.state.taskPriority,
        Status: this.state.taskStatus,
      };
      tempArray.push(newTask);
      this.setState({ taskArray: tempArray });
      saveLocalData(tempArray);
      this.clearInput();
      this.hideAddForm();
      this.setState({taskAdded:true});
    }
    // this.clearInput();
    // this.hideAddForm();
    // this.setState({taskAdded:true});
  };

  addTask = () => {
    saveLocalData(this.state.taskArray);
  };

  changePageNumber = (event) => {
    let objName = event.target.name;
    this.setState({ currentPage: objName });
  };

  changePageNext = () => {
    let tempCurrentPage = parseInt(this.state.currentPage) + 1;
    this.setState({ currentPage: tempCurrentPage });
  };
  changePagePrevious = () => {
    if (this.state.currentPage > 1) {
      let tempCurrentPage = parseInt(this.state.currentPage) - 1;
      this.setState({ currentPage: tempCurrentPage });
    }
  };
  deleteTask = (event) => {
    let object = event.target.parentNode.parentNode.id;
    let tempArr = this.state.taskArray.map((elem) => elem);
    tempArr.splice(object, 1);
    this.setState({ taskArray: tempArr });
    saveLocalData(tempArr);
  };

  handleEditCheckBox = (event) => {
    let object = event.target.parentNode.id;
    let tempArr = this.state.taskArray.map((elem) => elem);
    let tempObj = {
      Task_Name: tempArr[object].Task_Name,
      Priority: tempArr[object].Priority,
      Status: event.target.checked,
    };
    tempArr[object] = tempObj;
    this.setState({ taskArray: tempArr });
    saveLocalData(tempArr);
  };
  sortTaskArrayTitleAsc = () => {
    let tempArray = this.state.taskArray;
    tempArray.sort(compareUpName);
    this.setState({ taskArray: tempArray });
    this.setState({ sortedTitleID: 0 });
  };
  sortTaskArrayTitleDesc = () => {
    let tempArray = this.state.taskArray;
    tempArray.sort(compareDownName);
    this.setState({ taskArray: tempArray });
    this.setState({ sortedTitleID: 1 });
  };
  sortTaskArrayPriorityAsc = () => {
    let tempArray = this.state.taskArray;
    tempArray.sort(compareUpPriority);
    this.setState({ taskArray: tempArray });
    this.setState({ sortedPriorityID: 0 });
  };
  sortTaskArrayPriorityDesc = () => {
    let tempArray = this.state.taskArray;
    tempArray.sort(compareDownPriority);
    this.setState({ taskArray: tempArray });
    this.setState({ sortedPriorityID: 1 });
  };
  sortTaskArrayStatusAsc = () => {
    let tempArray = this.state.taskArray;
    tempArray.sort(compareUpStatus);
    this.setState({ taskArray: tempArray });
    this.setState({ sortedStatusID: 1 });
  };
  sortTaskArrayStatusDec = () => {
    let tempArray = this.state.taskArray;
    tempArray.sort(compareDownStatus);
    this.setState({ taskArray: tempArray });
    this.setState({ sortedStatusID: 0 });
  };

  showAddForm = ()=>{
    console.log("Widocznosc:",this.state.visibilityPopup)
    
    this.setState({visibilityPopup:true});
  }

  hideAddForm = ()=>{
    console.log("Widocznosc:",this.state.visibilityPopup)
  
    this.setState({visibilityPopup:false});
  }
  render() {
    // Get current posts
    if(this.state.taskAdded)
    {
      setTimeout(() => {
        this.setState({taskAdded:false})
      }, 2000);
    }
    var currentPosts;
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    if (this.state.taskArray != null) {
      currentPosts = this.state.taskArray.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
    }

    if (this.state.taskArray == null) {
      return (
        <div>
          No task add yet.
          <br />
          <AddTaskForm
            editTask={this.hadleChange}
            editStatus={this.hadleChangeCheckBox}
            clearInputs={this.AddTaskToList}
            title={this.state.taskTitle}
            priority={this.state.taskPriority}
            status={this.state.taskStatus}
          />
        </div>
      );
    } else {
      return (
        <div className="table-container">
          <table>
            <Thead
              sortTitleUp={this.sortTaskArrayTitleAsc}
              sortTitleDown={this.sortTaskArrayTitleDesc}
              sortPriorityUp={this.sortTaskArrayPriorityAsc}
              sortPriorityDown={this.sortTaskArrayPriorityDesc}
              sortStatusDown={this.sortTaskArrayStatusAsc}
              sortStatusUp={this.sortTaskArrayStatusDec}
              sortedTitleID={this.state.sortedTitleID}
              sortedPriorityID={this.state.sortedPriorityID}
              sortedStatusID={this.state.sortedStatusID}
            />
            <TaskRow
              posts={currentPosts}
              onChangeCheckBox={this.handleEditCheckBox}
              deleteTask={this.deleteTask}
              indexMain={indexOfFirstPost}
            />
          </table>
          <TableNav
            postsPerPage={this.state.postsPerPage}
            totalPosts={this.state.taskArray.length}
            paginate={this.changePageNumber}
            hangePostPerPage={this.hadleChange}
            changePageNext={this.changePageNext}
            changePagePrevious={this.changePagePrevious}
            firstTask={indexOfFirstPost + 1}
            lastTask={indexOfLastPost}
            totalTasks={this.state.taskArray.length}
          />
          {this.state.visibilityPopup && (<div>asdsad <button>asd</button><AddTaskForm
            editTask={this.hadleChange}
            editStatus={this.hadleChangeCheckBox}
            clearInputs={this.AddTaskToList}
            title={this.state.taskTitle}
            priority={this.state.taskPriority}
            status={this.state.taskStatus}
            popupStatus={this.state.visibilityPopup}
            showFormAction={this.showAddForm}
            hideFormAction={this.hideAddForm}
            style={this.state.popupStyle}
          />
          </div>)}
           
         <OpenButton
          popupStatus={this.state.visibilityPopup}
          showFormAction={this.showAddForm}
          hideFormAction={this.hideAddForm}
          showForm={this.showAddForm}
          hideForm={this.hideAddForm}
          style={this.state.popupStyle}
         />
         {this.state.taskAdded &&(<div className = "confirm-bar">Task added to the list!!</div>)}
        </div>
      );
    }
  }
}


