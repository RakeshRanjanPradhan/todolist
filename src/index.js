import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/toDoList/toDoList';
import Completedlist from './components/completedList/completedList';

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
  handleEditChanges = (data) => {
    this.setState({ editDetails: data});
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
        <ToDoList toDoListData={this.state.toDoList} editData={this.state.editDetails} addToCompleted={(index) => this.addToCompleted(index)} editToDo={(index) => this.editToDo(index)} deleteToDo={(index) => this.deleteToDo(index)} handleEditChanges={(data) => this.handleEditChanges(data)} saveEditedData={(index) => this.saveEditedData(index)}/>
        <Completedlist completedData={this.state.completedList} deleteCompletedItem={(index) => this.deleteCompletedItem(index)}/>
      </div>
    )
  }
}

ReactDOM.render(<ToDo/>, document.getElementById('root'));