import {Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import { useState } from "react";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Edit, Home, Newspaper, Person2Outlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MyDrawer = () => {
    const navigate= useNavigate();
    const [drawer, setDrawer]= useState(false);
    return (  
        <>
        <Drawer open={drawer} onClose={()=>setDrawer(false)}>
            <List sx={{backgroundColor:'lightgreen',height:'100%'}}>
              <ListItemButton sx={{margin:2}} onClick={()=>navigate('/home')}>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText>HOME</ListItemText>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{margin:2}} onClick={()=>navigate('/peers')}>
                    <ListItemIcon><Person2Outlined/></ListItemIcon>
                    <ListItemText>PEERS</ListItemText>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{margin:2}} onClick={()=>navigate('/news')}>
                <ListItemIcon><Newspaper/></ListItemIcon>
                    <ListItemText>NEWS</ListItemText>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{margin:2}} onClick={()=>navigate('/blogs')}>
                <ListItemIcon><Edit/></ListItemIcon>
                    <ListItemText>BLOGS</ListItemText>
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