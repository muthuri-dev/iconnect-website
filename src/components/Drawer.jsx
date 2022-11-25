import {Drawer, IconButton, List, ListItemButton, ListItemText} from "@mui/material"
import { useState } from "react";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const MyDrawer = () => {
    const [drawer, setDrawer]= useState(false);
    return (  
        <>
        <Drawer open={drawer} onClose={()=>setDrawer(false)}>
            <List>
                <ListItemButton>
                    <ListItemText>Kennedy</ListItemText>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={()=>setDrawer(true)}>
            <ListOutlinedIcon fontSize="large" sx={{color:'white', marginTop:2}}/>
        </IconButton>
        </>
    );
}
 
export default MyDrawer;