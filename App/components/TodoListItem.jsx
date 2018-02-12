import React from 'react';


export default class TodosListItem extends React.Component {

    constructor(props) {
        super(props);
        this.onEditClick = this.onEditClick.bind(this);
        this.renderActions = this.renderActions.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.toggletask = this.toggletask.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.deleteOnclick = this.deleteOnclick.bind(this);

        this.state = {
            isEditing: false
        }
    }

    onEditClick() {
        this.setState({isEditing: true});
    }

    onCancelClick() {
        this.setState({isEditing: false});
    }

    toggletask() {
        this.props.toggleTask(this.props.task);
    };

    renderTasks() {
        const {task, isCompleted} = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick}>
                        <input type="text" defaultValue={task} ref="editInput">
                        </input>
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={this.toggletask}>{task}</td>
        );
    }

    onSaveClick(event) {
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false});
    }

    deleteOnclick(event) {
        event.preventDefault();
        this.props.deleteTask(this.props.task)
    }

    renderActions() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button onClick={this.deleteOnclick}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTasks()}
                {this.renderActions()}
            </tr>

        );
    }
}