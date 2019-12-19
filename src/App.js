import React from "react";
import logo from "./logo.svg";
import "./App.css";
import uuid from 'uuid'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: [],
    };
  }
  Changeinput = e => {
    this.setState({
      text: e.target.value
    });
  };
  Addbutton = () => {
      this.setState({ list: this.state.list.concat({text:this.state.text, id:uuid(),complete:false}), text: "" });
  };
  
  complet = id => {
    this.setState({list: this.state.list.map(el => el.id === id ? {...el, complete: !el.complete} : el)});
  };
  delete = id => {
    this.setState({ list: this.state.list.filter(el => el.id !== id) });
  };
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">To-do App !</h1>
          <p>Add new to-Do</p>
          <input
            value={this.state.text}
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter new task"
            onChange={this.Changeinput}
          />
          <a
            className="btn btn-primary btn-lg btt"
            href="#"
            role="button"
            onClick={this.state.text !== "" && this.Addbutton}
          >
            Add
          </a>
        </div>
        <h2>Let's get some work Done !</h2>
        {this.state.list.map(el => (
          <div className="liste">
            <h5 className={el.complete ? "Complete" : "Undo"}>{el.text}</h5>

            <button onClick={() => this.delete(el.id)}>Delete</button>
            <button onClick={() => this.complet(el.id)}>
              {!el.complete ? "Complete" : "Undo"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
