import React, {useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import API from '../../utils/API'



const ListCom = (props) => {
    
    const [line, setLine] = useState(props.isDone);

    useEffect(
        () => {
            setLine(props.isDone);
        },
        [],
    );
    
    const cut = () => {
        setLine(true);

        API.markAsDone(props.event._id, props._id);
    }
    

    return (
        <div>
           <ListItem>
                  
            <ListItemText style={{ textDecoration: line ? "line-through" : "none" }}>
                {props.description}
            </ListItemText>
                 
            
            <DeleteIcon onClick={cut}/>
           
                
            </ListItem>
        </div>
    )
}

export default ListCom