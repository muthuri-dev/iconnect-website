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
    const handleOpen= function(){
        setOpen(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleContent= function(e){
        setContent(e.target.value);
    }
    const handleImage= function(e){
        setImage(e.target.value);
    }
    const handleClose = function(){
        setOpen(false);
        const newNews=({
            title:title,
            content:content,
            image:image
        });
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
                    <TextField required color="primary" variant="outlined"label='Title'type='text' sx={{width:300,margin:1}} value={title} onChange={handleTitle}/>
                    <TextField required color="primary" variant="outlined"label='Content'type='text' sx={{width:300,margin:1}} value={content} onChange={handleContent}/>
                    <TextField  color="primary" variant="outlined"label='File'type='file' sx={{width:300,margin:1}} value={image} onChange={handleImage}/>
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