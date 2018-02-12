import _ from 'lodash';
import React from 'react';
import TodosListHeader from './TodosListHeader.jsx';
import TodoListItem from './TodoListItem.jsx';


export default class TodosList extends React.Component {
    renderTodos(){
        const props = _.omit(this.props,'todos');
        return _.map(this.props.todos,(todo, index )=> <TodoListItem key={index}
          {...todo}{...props}/>);
    }
    render (){

        return (
            <table>
                <TodosListHeader/>
                <tbody>{ this.renderTodos()}</tbody>
            </table>
        );
    }
}
