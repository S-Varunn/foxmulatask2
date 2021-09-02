import React, { Component } from "react";
import "./App.css";
class dropdown extends Component {
  state = {
    clicked: false,
    clicked1: false,
    clicked2: false,
    isActive: false,
    isActive1: false,
    isActive2: false,
  };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      isActive: !this.state.isActive,
    });
  };
  handleClick1 = () => {
    this.setState({
      clicked1: !this.state.clicked1,
      isActive1: !this.state.isActive1,
    });
  };
  handleClick2 = () => {
    this.setState({
      clicked2: !this.state.clicked2,
      isActive2: !this.state.isActive2,
    });
  };
  render() {
    return (
      <div className="maincontainer">
        <div className="dropdown">
          <div className="dropdown-button">
            <div className="row">
              <div className="text">WEEK 1</div>
              <div className="arrow">
                <i
                  onClick={this.handleClick}
                  className={
                    this.state.clicked
                      ? "fa fa-chevron-right down"
                      : "fa fa-chevron-right rotate"
                  }
                ></i>
              </div>
            </div>

            {this.state.isActive && (
              <div className="dropdown-content ">
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
              </div>
            )}
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-button">
            <div className="row">
              <div className="text">WEEK 2</div>
              <div className="arrow">
                <i
                  onClick={this.handleClick1}
                  className={
                    this.state.clicked1
                      ? "fa fa-chevron-right down"
                      : "fa fa-chevron-right rotate"
                  }
                ></i>
              </div>
            </div>

            {this.state.isActive1 && (
              <div className="dropdown-content">
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
              </div>
            )}
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-button">
            <div className="row">
              <div className="text">WEEK 3</div>
              <div className="arrow">
                <i
                  onClick={this.handleClick2}
                  className={
                    this.state.clicked2
                      ? "fa fa-chevron-right down"
                      : "fa fa-chevron-right rotate"
                  }
                ></i>
              </div>
            </div>

            {this.state.isActive2 && (
              <div className="dropdown-content">
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
                <div className="dropdown-item">List Item</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default dropdown;
