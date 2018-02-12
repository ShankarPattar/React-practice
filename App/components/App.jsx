import React from 'react';
import TodosList from './TodosList.jsx';
import CreateToDo from './CreateToDo.jsx';
const todos = [
    {
        task: 'AngularJS',
        isCompleted: false
    },
    {
        task: 'ReactJS',
        isCompleted: true
    },
    {
        task: 'Angular',
        isCompleted: false
    }
];
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.createTodos = this.createTodos.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.state = {
            todos
        };
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, {task});
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    createTodos(task) {
        this.state.todos.push({
            task, isCompleted: false
        });
        this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, 'task', oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos})

    }

    deleteTask(taskDelete) {
        _.remove(this.state.todos, todo => todo.task == taskDelete);
        this.setState({todos: this.state.todos})
    }


    render() {
        return (
            <div>
                <h1> To do List </h1>
                <CreateToDo todos={this.state.todos} createTodos={this.createTodos}/>
                <TodosList todos={this.state.todos} toggleTask={this.toggleTask}
                           saveTask={this.saveTask} deleteTask={this.deleteTask}/>
            </div>
        );
    }
}
