import React from 'react'
import TodoItem from './TodoItem';

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            enteredVal:" ",
            
        }
        this.readInput = this.readInput.bind(this)
     
    } 
    
    readInput(event){
        const val = event.target.value;
        this.setState({
            enteredVal:val
        })
    }
    render(){
       
       
       return ( 
           <div>
               <h5>todo list</h5>
               <div class="input-item">
                <input type="text" placeholder="Enter Item"  onChange={this.readInput} value={this.state.enteredVal}/>

                    
               </div>
               <TodoItem inputText={this.state.enteredVal}/>
               


           </div>

       )
    }
}

export default TodoList; 