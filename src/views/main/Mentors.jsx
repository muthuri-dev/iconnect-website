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
    const[company, setCompany]=useState('');
    const[meeting, setMeeting]= useState('');

    const handleOpen= function(){
        setOpen(true);
    }
    const handleName= function(e){
        setName(e.target.value);
    }
    const handleCompany= function(e){
        setCompany(e.target.value);
    }
    const handleMeeting= function(e){
        setMeeting(e.target.value);
    }
    const handleClose = function(){
        setOpen(false);
        const newMentor=({
            username:name,
            company:company,
            meeting:meeting,
        });
        axios.post('http://localhost:8000/IKonnect/mentors',newMentor)
            .then((response)=>{
                if(response.status===200){
                    alert('You are added as Mentor');
                }
            })
            .catch(error=>console.log(error.message));
    }
    return ( 
        <>
        <Grid container direction='column' sx={{alignItems:'center'}}>
        <Grid item sx={{position:'fixed',width:'100%',justifyContent:'end',display:'flex'}}>
                <IconButton onClick={()=>navigate('/home')}>
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
                    <TextField variant="outlined"label=' Linkedin'type='url' sx={{width:300,margin:1}}value={company} onChange={handleCompany}/>
                    <TextField required variant="outlined"label='meeting link'type='text' sx={{width:300,margin:1}} value={meeting} onChange={handleMeeting}/>
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