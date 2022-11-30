import { Grid, Typography } from "@mui/material";
import News from "./image/newsletter.svg"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const NewsView = () => {

    const[open, setOpen] =useState(false);
    const[title, setTitle]= useState('');
    const[content, setContent]= useState('');
    const[image, setImage]= useState('');

    const formData = new FormData();
    const handleOpen= function(){
        setOpen(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleContent= function(e){
        setContent(e.target.value);
    }
    const handleImage= function(event){
        if(event.target.files && event.target.files.length>0){
            setImage(event.target.files[0]);
        }else return null;
     }
    const handleClose = function(event){
        setOpen(false);
        event.preventDefault();
        formData.append('image',image);
        formData.append('title',title);
        formData.append('content',content);
        console.log([...formData]);
        axios.post('http://localhost:8000/IKonnect/news/',formData)
        .then((response)=>{
            if(response.status===200){
                alert('News added');
            }
        })
        .catch(error=>console.log(error.message));
    }
    return ( 
        <>
         <Grid container direction='column' sx={{marginTop:8,alignItems:'center'}} >
            <Grid item >
                <img src={News} alt="null" height='300'/>
            </Grid>
            <Grid item>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold',marginTop:3}}>Get Tech News Instant</Typography>
                </Grid>
                <Grid item>
                    community members news
                </Grid>
                <Grid item>
                <Fab onClick={handleOpen} variant='extended' sx={{position:'fixed',backgroundColor:'green',color:'white',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)}}>
                Share Trends
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',textAlign:'center'}}>Share Trends Here</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required variant="outlined"label='Title'type='text' sx={{width:300,margin:1}} value={title} onChange={handleTitle}/>
                    <TextField required variant="outlined" row={4} multiline fullWidth label='Content'type='text' sx={{width:300,margin:1}} value={content} onChange={handleContent}/>
                    <TextField  variant="outlined"label=''type='file' sx={{width:300,margin:1}} onChange={handleImage}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" sx={{backgroundColor:'green'}}>SHARE </Button>
                </DialogActions>
            </Dialog>
                </Grid>
        </Grid>
        </>
     );
}
 
export default NewsView;