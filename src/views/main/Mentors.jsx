import { Home } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import Mentor from "./image/nineth.svg";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Mentors = () => {
    const navigate= useNavigate();

    const[open, setOpen] =useState(false);
    const[name ,setName]=useState('');
    const [git, setGit]=useState('');
    const[linkedin, setLinkedin]=useState('');
    const[phone, setPhone]= useState('');

    const handleOpen= function(){
        setOpen(true);
    }
    const handleName= function(e){
        setName(e.target.value);
    }
    const handleGit= function(e){
        setGit(e.target.value);
    }
    const handleLinkedin= function(e){
        setLinkedin(e.target.value);
    }
    const handlePhone= function(e){
        setPhone(e.target.value);
    }
    const handleClose = function(){
        setOpen(false);
        const newMentor=({
            name:name,
            git:git,
            linkedin:linkedin,
            phone:phone
        });
        axios.post('http://localhost:8000/mentors',newMentor);
    }
    return ( 
        <>
        <Grid container direction='column' sx={{alignItems:'center'}}>
        <Grid item sx={{position:'fixed',width:'100%',justifyContent:'end',display:'flex'}}>
                <IconButton onClick={()=>navigate('/')}>
                    <Home sx={{color:'green',fontSize:40}}/>
                </IconButton>
            </Grid>
            <Grid item>
                <img src={Mentor} alt="null" height='300'/>
            </Grid>
            <Grid item>
              <Typography sx={{fontFamily:'mpnospace',fontWeight:'bold',color:'green'}}>Mentors</Typography>
            </Grid>
            <Grid item>
            <Fab onClick={handleOpen} variant='extended' sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),backgroundColor:'green',color:'white',
            right:(theme)=>theme.spacing(2)}}>
                Be a Mentor
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',textAlign:'center'}}>Get assistance from Peers</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required variant="outlined"label='Name'type='text' sx={{width:300,margin:1}} value={name} onChange={handleName}/>
                    <TextField variant="outlined"label='GitHub Link'type='url' sx={{width:300,margin:1}} value={git} onChange={handleGit}/>
                    <TextField variant="outlined"label=' Linkedin'type='url' sx={{width:300,margin:1}}value={linkedin} onChange={handleLinkedin}/>
                    <TextField required variant="outlined"label='meeting link'type='text' sx={{width:300,margin:1}} value={phone} onChange={handlePhone}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" sx={{color:'white',backgroundColor:'green'}}>BECOME</Button>
                </DialogActions>
            </Dialog>
            </Grid>
        </Grid>
        </>
     );
}
 
export default Mentors;