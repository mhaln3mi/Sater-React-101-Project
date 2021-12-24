import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task:"",
      list:[]

    }
  }
  updateTask=(key, value)=>{
    this.setState({
      [key]: value
    })
  }
  deleteTasks=()=> {
    const deletedList = []
    this.setState({list: deletedList})
  }
  addTask=()=> {
    const newTask={
      id: 1 + Math.random(),
      value: this.state.task.slice()
    };
    // current list of items
    const list = [...this.state.list];

    //add new item
    list.push(newTask);

    //update state
    this.setState({
      list,
      task:""
    });
    
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>My list</h1>
          <button onClick={this.deleteTasks}>Clear list</button>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                </li>
              )
            })}
          </ul>
          <input type="text" placeholder="type your text here" onChange={e => this.updateTask("task", e.target.value)}></input>
          <br/>
          <button onClick={this.addTask}>Add item</button>
        </div>
      </div>
    )
  }
}
