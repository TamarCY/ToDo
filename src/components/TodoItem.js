import React from 'react'
import Item from '../models/ItemClass';

class TodoItem extends React.Component{
    constructor(props) {
        super(props);
      this.creatNewObj = this.creatNewObj.bind(this)
     
    } 

    creatNewObj(){
        const itemText = this.props.inputText;
        const newItem = new Item ({itemText})
        console.log(newItem.text)
        
    }


    // readNewItem(){
    //     const newItem = this.props.inputText;
    //     const itemArr = [];
    //     itemArr.

    // }



    render(){
       
       
       return ( 
           <div>
               <button onClick={this.creatNewObj}>Add</button>
               <p >The item is: {this.props.inputText}</p>
           </div>

       )
    }
}

export default TodoItem; 