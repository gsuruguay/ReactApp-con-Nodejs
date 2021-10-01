import React from 'react';
//import "./AllOperation.css";

class AllOperation extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.allOperations.map((operation, index) =>
                        <tr key={operation.id}>
                            <td>{operation.concept}</td>
                            <td>${operation.amount}</td>
                            <td>{operation.date.slice(0, 10)}</td>
                            <td>{operation.type}</td>
                            <td>
                                <button onClick={() => { this.props.selectOperation(operation); this.props.changeUpdateForm(true) }}>
                                    Edit
                                </button>
                                <button onClick={() => { this.props.peticionDelete(operation.id) }}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

export default AllOperation;