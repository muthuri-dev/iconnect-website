import { Avatar, Card, CardActions, CardContent, Fab, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import{useState,useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import axios from 'axios'
import { Grid } from "@mui/material";
import Profile from "./image/third.svg";

const PeersView = () => {

    const[open, setOpen]=useState(false);
    const[name, setName]= useState('');
    const[email, setEmail] = useState('');
    const[portifolio, setPortifolio]= useState('');
    const[linkedin, setlinkedin]= useState('');
    const[ skills, setSkills]= useState('');
    const [peers, setPeers]= useState([]);

    const handleClick=function(){
        setOpen(true);
    }
    const handleName = function(e){
        setName(e.target.value);
    }
    const handleEmail = function(e){
        setEmail(e.target.value);
    }
    const handleWeb = function(e){
        setPortifolio(e.target.value);
    }
    const handleLinkedin = function(e){
        setlinkedin(e.target.value);
    }
    const handleSkills = function(e){
        setSkills(e.target.value);
    }
    const handleClose=function(){
        const newProfile=({
            username:name,
            email:email,
            portfolio:portifolio,
            linkedIn:linkedin,
            skills:skills
        });
        axios.post('https://ikonnectback.onrender.com/IKonnect/peers/',newProfile)
             .then((response)=>{
                 if(response.status===200){
                    setOpen(false);
                    //  setName('');
                    //  setEmail('');
                    //  setPortifolio('');
                    //  setlinkedin('');
                    //  setSkills('');
                 }else{
                    console.log('not saved');
                 }
             })
             .catch(error=>console.log(error.message));
        
    }

    //get function;
    useEffect(()=>{
        axios.get('https://ikonnectback.onrender.com/IKonnect/peers/')
            .then(response=>setPeers(response.data.data))
            .catch(error=>console.log(error.messange));
    },[peers]);
    return (  
        <>
            <Grid container direction='column' sx={{marginTop:7,alignItems:'center'}} >
                <Grid item>
                <Fab variant="extended" aria-label="edit"
        sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            backgroundColor:'green',color:'white',
            right:(theme)=>theme.spacing(2)
    }}onClick={handleClick}
        >
            <EditIcon/>Edit Profile
        </Fab>
            <Dialog open={open} >
            <DialogTitle sx={{textAlign:'center',fontFamily:'monospace'}}>Create Your Profile</DialogTitle>
            <DialogContent spacing={1} sx={{textAlign:'center'}}>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="primary"label='Username'type='text' value={name} onChange={handleName}/>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="primary"label='Email address' type='email'value={email} onChange={handleEmail}/>
                <TextField sx={{width:300,margin:1}} variant="outlined"color="primary"label='Portifolio web'type='url'value={portifolio} onChange={handleWeb}/>
                <TextField sx={{width:300,margin:1}} variant="outlined"color="primary"label='LinkedIn'type='url'value={linkedin} onChange={handleLinkedin}/>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="primary"label='Tech Skills'type='url' value={skills} onChange={handleSkills}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='contained'sx={{backgroundColor:'green'}}>SUBMIT</Button>
            </DialogActions>
            </Dialog>
                </Grid>
                <Grid item>
                    <img src={Profile} alt="null"height='300px' />
                </Grid>
                <Grid item>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold',marginTop:3}}>Peers Profile</Typography>
                </Grid>
                <Grid item container  sx={{justifyContent:'center'}}>
                    {
                        peers ?(
                            peers.map(peer=>(
                                <Card elevation={3}  key={peer._id} sx={{width:'300px',margin:2}}>
                                    <CardContent>
                                    <Typography sx={{fonrFamily:'monospace',color:'green'}}><Avatar/> {peer.username}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" sx={{backgroundColor:'green',color:'white'}}>Message</Button>
                                    </CardActions>
                                </Card>
                            ))
                        ):(
                            <Typography>Loadding ...</Typography>
                        )
                    }
                </Grid>
            </Grid>

        </>
    );
}
 
export default PeersView;