import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,

} from '@material-ui/core'
import CloudIcon from '@material-ui/icons/Cloud';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const Listas = () => {
    return (
        <div>
            <List componenets='nav'>

                <ListItem button>
                    <ListItemIcon>
                        <CloudIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Cloud'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <BeachAccessIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Vacaciones'/>
                </ListItem>

                <Divider/>

            </List>
        </div>
    )
}

export default Listas
