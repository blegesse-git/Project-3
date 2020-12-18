import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import ListCom from "../To-DoList/index";
import API from "../../utils/API";

const ToDOList = () => {

    const [item, setItem] =  useState("")
    const [newItem, setNewItem] = useState([])

    const itemEvent = (event) => {
        setItem(event.target.value)
    }

    const listOfItems = () => {
        setNewItem((previousValue)=> {
            return [...previousValue, item];
        });
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
                
                    {newItem.map((val, index)=> {
                        return  <ListCom key={index} text={val} />
                    })}
                
            </div>

        </div>
    )
}

export default ToDOList;

