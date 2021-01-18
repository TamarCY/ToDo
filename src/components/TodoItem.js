import React from 'react'

class TodoItem extends React.Component{
    constructor(props) {
        super(props);
     
    } 
    render(){
       
       
       return ( 
           <div>
               <p>The item is: {this.props.inputText}</p>
           </div>

       )
    }
}

export default TodoItem; 