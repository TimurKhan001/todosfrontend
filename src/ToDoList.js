import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import * as apiCalls from './api';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        
        this.addToDo = this.addToDo.bind(this);
    }
    
    componentWillMount(){
       this.loadTodos();
    }
    
    async loadTodos() {
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }
    
    async addToDo(val){
        let newTodo = await apiCalls.createTodo(val); 
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    
    async deleteToDo(id) {
        await apiCalls.removeTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({todos: todos});
    }
    
    async toggleToDo(todo) {
        let updatedTodo = await apiCalls.updateTodo(todo);
        
        const todos = this.state.todos.map(t => 
            (t._id === updatedTodo._id)
            ? {...t, completed: !t.completed} 
            : t
            );
            this.setState({todos: todos});
    }
    
    
    
    render(){
        const todos = this.state.todos.map((t) => (
            <ToDoItem 
                key={t._id}
                {...t}
                onDelete = {this.deleteToDo.bind(this,t._id)}
                onToggle = {this.toggleToDo.bind(this,t)}
            />
            ));
        return(
                <div className="container"> 
                    <div className="header">
                    <h1> TODO LIST!</h1> 
                    </div>
                    <ToDoForm addToDo={this.addToDo} />
                    <div className="tasks">
                    <ul>
                    {todos}
                    </ul>
                    </div>
                </div>
            );
    }
}

export default ToDoList;