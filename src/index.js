import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      completedList: [],
      task: '',
      date: '',
      editData: '',
      editDetails : ''
    };
  }
  
  handleChanges = (event) => {
    this.setState({ task: event.target.value});
    this.setState({ date: 'Dt:- 06:01:2020' });
    this.setState({ editData: false });
  }

  addToDo = () => {
    let tempArr = this.state.toDoList;
    tempArr.push({
      'task': this.state.task,
      'date': this.state.date,
      'editData': this.state.editData
    });
    this.setState({ toDoList: tempArr});
    this.clearToDo();
  }
  clearToDo = () => {
    this.setState({ task: ''});
    this.setState({ date: ''});
    this.setState({ editData: false});
  }
  addToCompleted = (index) => {
    let tempToDoArr = this.state.toDoList; 
    let tempComplitedArr = this.state.completedList;
    if(tempToDoArr.indexOf(tempToDoArr[index]) !== -1){
      tempComplitedArr.push(tempToDoArr[index]);
      this.setState({ completedList: tempComplitedArr});
      tempToDoArr.splice(index, 1);
      this.setState({ toDoList: tempToDoArr});
    }
  }
  editToDo = (index) => { 
    let tempToDoArr = this.state.toDoList;
    tempToDoArr[index].editData = true;
    this.setState({ toDoList: tempToDoArr});
    this.setState({ editDetails: tempToDoArr[index].task});
  }
  handleEditChanges = (event) => {
    this.setState({ editDetails: event.target.value});
  }
  saveEditedData = (index) => {
    let tempToDoArr = this.state.toDoList;
    tempToDoArr[index].task = this.state.editDetails; 
    tempToDoArr[index].editData = false;
    this.setState({ toDoList: tempToDoArr});
  }
  deleteToDo = (index) => {
    let tempToDoArr = this.state.toDoList; 
    if(tempToDoArr.indexOf(tempToDoArr[index]) !== -1){
      tempToDoArr.splice(index, 1);
      this.setState({ toDoList: tempToDoArr});
    }
  }
  deleteCompletedItem = (index) => {
    let tempComplitedArr = this.state.completedList;
    if(tempComplitedArr.indexOf(tempComplitedArr[index]) !== -1){
      tempComplitedArr.splice(index, 1);
      this.setState({ completedList: tempComplitedArr});
    }
  }
  render() {
    return(
      <div>
        <h2>toDo list</h2>
        <input type='text' name='task' value={this.state.task} onChange={this.handleChanges}/>
        <button onClick={this.addToDo}>+</button>
        <button onClick={this.clearToDo}>Clear</button>
        <br/>
        <h4>
          <div style={{ display: (this.state.toDoList.length) ? 'block' : 'none' }}>
            Task-to-do: {this.state.toDoList.length}
          </div>
        </h4>
        <table>
          <tbody>
            {this.state.toDoList.map((item, index) => (
              <tr key={index}>
                  <div style={{ display: (item.editData) ? 'none' : 'block' }}>
                    <td>{item.task}</td>
                    <td>{item.date}</td>
                    <td> <button onClick={() => this.addToCompleted(index)}>Completed</button> </td>
                    <td> <button onClick={() => this.editToDo(index)}>      Edit     </button> </td>
                    <td> <button onClick={() => this.deleteToDo(index)}>    Delete   </button> </td>
                  </div>
                  <div style={{ display: (item.editData) ? 'block' : 'none' }}>
                    <td colSpan="5">
                      <input type='text' name='editDetails' value={this.state.editDetails} onChange={this.handleEditChanges}/>
                      <button onClick={() => this.saveEditedData(index)}> Update </button>
                    </td>
                  </div>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>
          <div style={{ display: (this.state.completedList.length) ? 'block' : 'none' }}>
            Completed-task: {this.state.completedList.length}
          </div>
        </h4>
        <table>
          <tbody>
            {this.state.completedList.map((item, index) => (
              <tr key={index}>
                <td>{item.task}</td>
                <td>Completed on {item.date}</td>
                <td> <button onClick={() => this.deleteCompletedItem(index)}>Delete</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<ToDo/>, document.getElementById('root'));