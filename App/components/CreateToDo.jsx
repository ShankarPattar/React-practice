import React from 'react';
import _ from 'lodash';
export default class createToDo extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.renderError = this.renderError.bind(this);

        this.state = {
            error: null
        };
    }

    submitForm(event) {
        event.preventDefault();

        const todoInput = this.refs.todoInput;
        const task = todoInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({error: validateInput});
            return null;
        }
        this.setState({error: null})
        this.props.createTodos(task);
        this.refs.todoInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Enter task then hit Add button';
        }
        else if (_.some(this.props.todos, {task})) {
            return 'Entered task already exist - Enter new task';
        }
        else {
            return null;
        }
    }

    renderError() {
        if (!this.state.error) {
            return null;
        }
        return <div style={{color: 'red'}}> {this.state.error}</div>
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" placeholder="add todo" ref="todoInput"/>
                <button>Add</button>
                {this.renderError()}
            </form>
        );
    }
}
