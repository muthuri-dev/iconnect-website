import { Home, ShareOutlined, ShareRounded, Twitter } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Grid, IconButton,Typography,CardActions } from "@mui/material";
import Project from "./image/fourth.svg";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import {Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState,useEffect } from "react";
import axios from 'axios';
import { TwitterShareButton } from "react-share";


const Projects = () => {
    const navigate= useNavigate();
    const formData = new FormData();

    const[project, setProject] = useState(false);
    const[title, setTitle] =useState('');
    const[description, setDescription] =useState('');
    const[git, setGit] =useState('');
    const[live, setLive] =useState('');
    const[image, setImage] =useState('');
    const[skills, setSkills] =useState('');
    const [datas, setData]= useState([]);

    const handleProject=function(){
        setProject(true);
    }
    const handleTitle= function(e){
        setTitle(e.target.value);
    }
    const handleDescription= function(e){
        setDescription(e.target.value);
    }
    const handleGit= function(e){
        setGit(e.target.value);
    }
    const handleLive= function(e){
        setLive(e.target.value);
    }
    const handleImage= function(event){
        if(event.target.files && event.target.files.length>0){
            setImage(event.target.files[0]);
        }else return null;
     }
    const handleSkills= function(e){
        setSkills(e.target.value);
    }
    const handleProjectClose=function(event){
        setProject(false);
        event.preventDefault();
        formData.append('image',image);
        formData.append('projectName',title);
        formData.append('description',description);
        formData.append('gitHub',git);
        formData.append('liveLink',live);
        console.log([...formData]);
        axios.post('http://localhost:8000/IKonnect/projects/',formData)
            .then((response)=>{
                if(response.status===200){
                    alert('Blog added');
                }
            })
            .catch(error=>console.log(error.message));
    }
    useEffect(()=>{
         axios.get('https://ikonnectback.onrender.com/IKonnect/projects/')
            .then(response=>{
                if(response.status===200){
                    console.log(response.data.data);
                    setData(response.data.data);
                }else{
                    console.log('get projects error');
                }
            })
            .catch(error=>console.log(error.message))
    },[datas]);

    const currentPage= window.location.href;
    
    return ( 
        <>
        <Grid container direction='column' sx={{alignItems:'center'}}>
            <Grid item sx={{position:'fixed',width:'100%',justifyContent:'end',display:'flex'}}>
                <IconButton onClick={()=>navigate('/home')}>
                    <Home sx={{color:'green',fontSize:40}}/>
                </IconButton>
            </Grid>
            <Grid item>
                <img src={Project} alt="null" height='300'/>
            </Grid>
            <Grid item>
              <Typography sx={{fontFamily:'mpnospace',fontWeight:'bold',color:'green',marginTop:4}}>Projects</Typography>
            </Grid>
            <Grid item>
            <Fab variant='extended'arial-label='add'
        sx={{position:'fixed',backgroundColor:'green',color:'white',bottom:(theme)=>theme.spacing(2),right:(theme)=>theme.spacing(2)}}
        onClick={handleProject}
        >
            <AddIcon/>Add Project
        </Fab>
       <Dialog open={project}>
            <DialogTitle sx={{textAlign:'center',fontFamily:'monospace'}}>Showcase your Project</DialogTitle>
            <DialogContent spacing={1} sx={{textAlign:'center'}}>
                <TextField sx={{width:300,margin:1}}required variant="outlined"label='Title'type='text'value={title} onChange={handleTitle} />
                <TextField sx={{width:300,margin:1}}required variant="outlined" label='Description' type='text'value={description} onChange={handleDescription}/>
                <TextField sx={{width:300,margin:1}} required variant="outlined" label='GitHub Link'type='url'value={git} onChange={handleGit} />
                <TextField sx={{width:300,margin:1}} variant="outlined" label='Live Project Link'type='url'value={live} onChange={handleLive} />
                <TextField sx={{width:300,margin:1}} required variant="outlined"label=''type='file' onChange={handleImage} />
                <TextField sx={{width:300,margin:1}}required variant="outlined" label='Technologies used'type='url'value={skills} onChange={handleSkills} />
               
            </DialogContent>
            <DialogActions>
                <Button onClick={handleProjectClose} variant='contained' sx={{backgroundColor:'green', color:"white"}}>SUBMIT</Button>
            </DialogActions>
            </Dialog>
            </Grid>
            <Grid container item sx={{justifyContent:'center'}}>
                {
                    datas && datas.map(data=>{
                         const blob = new Blob([Int8Array.from(data.image.data.data)], {type: data.image.contentType });
                          const image = window.URL.createObjectURL(blob);

                        return(
                            <Card elevation={5} key={data._id} sx={{margin:4, height:'auto',width:300,boxShadow: "3px 3px 3px 3px green",shadowOpacity: 0.5,}}>
                            <CardContent>
                                <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold'}}>{data.projectName}</Typography>
                            </CardContent>
                            <CardMedia
                            component="img"
                            height="150"
                            image={image}
                            alt={data.image.contentType }
                            sx={{margin:1,objectFit:'contain'}}
                            />
                            <CardContent>
                                <Typography>{data.description}</Typography>
                                <Typography>Category: {data.category}</Typography>
                                <Typography>Link: {data.liveLink}</Typography>
                                <Typography>GitHub: {data.gitHub}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton>
                                    <ShareRounded/>
                                </IconButton>
                                <IconButton>
                                    <TwitterShareButton
                                    url={
                                        currentPage
                                    }
                                    quote='please share this first'
                                    hashtags='#code'
                                    >
                                        <Twitter color='primary'/>
                                    </TwitterShareButton>
                                </IconButton>
                            </CardActions>
                        </Card>
                       )
                    })}
                {
                    !datas && <Typography>Loading ...</Typography>
                }
            </Grid>
        </Grid>
        </>
     );
}
 
export default Projects;