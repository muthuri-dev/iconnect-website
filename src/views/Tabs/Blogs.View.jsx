import { Grid,Typography } from "@mui/material";
import Blogs from "./image/eigth.svg"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";

const BlogsView = () => {
    const[open, setOpen]=useState(false);
    const[title, setTitle]= useState('');
    const[content, setContent]= useState('');
    const[image, setImage]= useState('');

    const formData= new FormData();
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

    const handleClose=function(e){
        setOpen(false);
        e.preventDefault();
        formData.append('image',image);
        formData.append('title',title);
        formData.append('content',content);
        console.log([...formData]);
        axios.post('http://localhost:8000/IKonnect/blogs/',formData)
            .then((response)=>{
                if(response.status===200){
                    alert('Blog added');
                }
            })
            .catch(error=>console.log(error.message));
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
                    <TextField required variant="outlined"type='text' label='title' sx={{margin:1,width:300}} value={title} onChange={handleTitle}/>
                    <TextField required variant="outlined"type='text' row={4} multiline fullWidth label='Content' sx={{margin:1,width:300}} value={content} onChange={handleContent}/>
                    <TextField variant="outlined"type='file' label='' sx={{margin:1,width:300}} onChange={handleImage}/>
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