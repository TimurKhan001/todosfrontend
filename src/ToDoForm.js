import React, {Component} from 'react';

class ToDoForm extends Component{
    constructor(props){
        super(props);
        this.state = {inputValue: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    
    handleSubmit() {
        this.props.addToDo(this.state.inputValue);    
        this.state.inputValue = "";
    }
    
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
        this.props.addToDo(this.state.inputValue);
        this.state.inputValue = "";
        }
    }
    
    render() {
        return (
            <div className="form">
                <div className="input">
            
                    <input className="input__tasks" type="text" placeholder="Type your task here!" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleKeyPress} required/>
            
                    <button className="btn" onClick={this.handleSubmit}>Add Task</button>
            
                </div>
            </div>
        );
    }
}


export default ToDoForm;