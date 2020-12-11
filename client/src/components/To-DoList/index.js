import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';




const ListCom = (props) => {
    
    const [line, setLine] = useState(false)
    
    const cut = () => {
        setLine(true)
    }

    return (
        <div>
           <ListItem>
                  
            <ListItemText style={{ textDecoration: line ? "line-through" : "none" }}>
                {props.text}
            </ListItemText>
                 
            
            <DeleteIcon onClick={cut}/>
           
                
            </ListItem>
        </div>
    )
}

export default ListCom