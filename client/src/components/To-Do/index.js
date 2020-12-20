import React, { useState, useEffect } from 'react'
import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import ListCom from "../To-DoList/index";
import API from "../../utils/API";
import EventsService from '../../services/events';

const ToDOList = (props) => {

    const [item, setItem] =  useState("")
    const [newItem, setNewItem] = useState([]);
    const [items, setItems] = useState(props.eventState.toDoItems || []);
    

    const itemEvent = (event) => {
        setItem(event.target.value)
    }

    const listOfItems = async () => {
        setNewItem((previousValue)=> {
            return [...previousValue, item];
        });
        const response =  await EventsService.addToDo(props.eventState._id, item);
        setItems(response.data[0].toDoItems);
        setItem("");
        
        
        
        
    };
    
   
    
    return (
        <div className= "main_div">
            <div className ="center_div">
                <TextField 
                placeholder='Add an Item'
                onChange={itemEvent}
                value={item}/>
                <Button className='newBtn' onClick={listOfItems}>
                    <AddCircleIcon />
                </Button>
                <br />
                
                    {items.map((item, index)=> {
                        return  <ListCom key={index} text={item.description} />
                    })}
                
            </div>

        </div>
    )
}

export default ToDOList;

