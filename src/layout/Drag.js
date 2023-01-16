import React, { Component } from "react";
import { render } from "react-dom";
import NewTask from "./Component/NewTask";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: "Implement new designs", category: "wip", bgColor: "#9fa8da" },
        {
          name: "Performance Improvements",
          category: "wip",
          bgColor: "#9fa8da",
        },
        {
          name: "Design navigation changes",
          category: "complete",
          bgColor: "#9fa8da",
        },
        { name: "Redesign overview", category: "ready", bgColor: "#9fa8da" },
      ],
      isClicked: false,
    };
  }

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
        if (cat === "complete") {
          task.bgColor = "#B0C4DE";
        } else {
          task.bgColor = "#87CEEB";
        }
      }
      return task;
    });

    this.setState({ ...this.state.tasks, tasks });
  };

  handleAddNew = () => {
    let val = this.state.isClicked ? false : true;
    this.setState({ isClicked: val });
  };

  handleClose = (obj) => {
    this.setState({ isClicked: obj });
  };

  handleNewTask = (content) => {
    const task = {};
    task.name = content;
    task.bgColor = "#9fa8da";
    task.category = "wip";
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks });
  };

  render() {
    let popup = null;
    if (this.state.showPopup) {
      popup = (
        <Popup
          message="the text you need to display"
          closeMe={this.closePopupHandler}
        />
      );
    }

    const tasks = {
      wip: [],
      complete: [],
      ready: [],
    };
    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ background: t.bgColor }}
        >
          {t.name}
        </div>
      );
    });
    const loader = this.state.isClicked ? (
      <NewTask
        handleNewTask={this.handleNewTask}
        handleClose={this.handleClose}
      />
    ) : null;
    return (
      <div className="DragDrop">
        <div className="container-drag">
          {loader}
          <div
            className="wip"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "wip")}
          >
            <span className="task-header">Ready</span>
            <div id="box">
              <Link to="/Alert">{tasks.wip}</Link>
              {popup}
            </div>
            <span>
              <a className="btn-floating btn" id="add">
                <i className="material-icons" onClick={this.handleAddNew}>
                  add
                </i>
              </a>
            </span>
          </div>

          <div
            className="ready"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "ready")}
          >
            <span className="task-header">Work in Progress</span>
            <div>
              <Link to="/Alert">{tasks.ready}</Link>
              {popup}
            </div>
          </div>

          <div
            className="droppable"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "complete")}
          >
            <span className="task-header">Completed</span>
            {tasks.complete}
          </div>
        </div>
      </div>
    );
  }
}

export default Drag;
