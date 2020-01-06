import React from 'react';

class ToDoList extends React.Component {
    handleEditChangesData = (event) => {
        this.props.handleEditChanges(event.target.value);
    }
    render() {
        return (
            <div>
                <h4>
                    <div style={{ display: (this.props.toDoListData.length) ? 'block' : 'none' }}>
                    Task-to-do: {this.props.toDoListData.length}
                    </div>
                </h4>
                <table>
                    <tbody>
                    {this.props.toDoListData.map((item, index) => (
                        <tr key={index}>
                            <div style={{ display: (item.editData) ? 'none' : 'block' }}>
                            <td>{item.task}</td>
                            <td>{item.date}</td>
                            <td> <button onClick={() => this.props.addToCompleted(index)}>Completed</button> </td>
                            <td> <button onClick={() => this.props.editToDo(index)}>      Edit     </button> </td>
                            <td> <button onClick={() => this.props.deleteToDo(index)}>    Delete   </button> </td>
                            </div>
                            <div style={{ display: (item.editData) ? 'block' : 'none' }}>
                            <td colSpan="5">
                                <input type='text' name='editDetails' value={this.props.editData} onChange={this.handleEditChangesData}/>
                                <button onClick={() => this.props.saveEditedData(index)}> Update </button>
                            </td>
                            </div>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ToDoList; 