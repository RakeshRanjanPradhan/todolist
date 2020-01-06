import React from 'react';

class Completedlist extends React.Component {
    render() {
        return (
            <div>
                <h4>
                <div style={{ display: (this.props.completedData.length) ? 'block' : 'none' }}>
                    Completed-task: {this.props.completedData.length}
                </div>
                </h4>
                <table>
                    <tbody>
                        {this.props.completedData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.task}</td>
                            <td>Completed on {item.date}</td>
                            <td> <button onClick={() => this.props.deleteCompletedItem(index)}>Delete</button> </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Completedlist; 