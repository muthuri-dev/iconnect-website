import { Grid,Typography } from "@mui/material";
import Blogs from "./image/eigth.svg"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";

const BlogsView = () => {
    const[open, setOpen]=useState(false);
    const[title, setTitle]= useState('');
    const[description, setDescription]= useState('');
    const[image, setImage]= useState('')
    const handleOpen= function(){
        setOpen(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleDescription= function(e){
        setDescription(e.target.value);
    }
    const handleImage= function(e){
        setImage(e.target.value);
    }

    const handleClose=function(e){
        setOpen(false);
        e.preventDefault();
        console.log({title, description});
        const newBlog=({
            title:title,
            description:description
        });
    }
    return ( 
        <>
        <Grid container direction='column' sx={{marginTop:8,alignItems:'center'}} >
            <Grid item>
                <img src={Blogs} alt="null" height='300'/>
            </Grid>
            <Grid item>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold',marginTop:3}}>Tech blogs and Articles</Typography>
                </Grid>
                <Grid item>
                    community members blogs
                </Grid>
                <Grid item>
                <Fab onClick={handleOpen} variant='extended'  sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),backgroundColor:'green',color:'white',
            right:(theme)=>theme.spacing(2)}}> 
                <AddIcon/>Share Blog
            </Fab>
            <Dialog open={open}>
                <DialogTitle sx={{fontFamily:'monospace',display:'flex',justifyContent:'center'}}>Add a Blog or Article</DialogTitle>
                <DialogContent sx={{textAlign:'center'}}>
                    <TextField required color="primary"variant="outlined"type='text' label='title' sx={{margin:1,width:300}} onChange={handleTitle}/>
                    <TextField required color="primary"variant="outlined"type='text' row={4} multiline fullWidth label='Description' sx={{margin:1,width:300}} onChange={handleDescription}/>
                    <TextField  color="primary"variant="outlined"type='file' label='Image' sx={{margin:1,width:300}} onChange={handleImage} value={image}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" sx={{color:'green'}}>SUBMIT</Button>
                </DialogActions>
            </Dialog>
                </Grid>
        </Grid>
        </>
     );
}
 
export default BlogsView;