import { Grid,Card, CardMedia,Typography, TextField, Button } from "@mui/material";
import Login from "./image/seventh.svg";
import Logo from "./image/logo.png";
import {useTheme} from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {

  const theme= useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate= useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(event){
    setEmail(event.target.value);
  }
  function handlePassword(event){
    setPassword(event.target.value);
  }
  function handleLogin(event){
    event.preventDefault();
    console.log('clicked');
    const newLogin=({
        email:email,
        password:password,
    });
        axios.post('https://ikonnectback.onrender.com/IKonnect/login/',newLogin)
            .then(response=>{
                console.log(response.data);
                if(response.data.status==='ok' && response.data.user===true){
                    navigate('/home');
                }else{
                    window.alert('User does not exist');
                }
            })
            .catch(error=>console.log(error.message));
    
  }
    return ( 
        <>
            <Grid container direction='row'  sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                {
                    isMatch ?(
                        <Grid item sx={{display:'grid',placeItems:'center'}}>
                    <img src={Logo} alt="null" height='100'/>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold'}}>IKonnect</Typography>
                    <Typography sx={{fontFamily:'monospace',fontWeight:'bold'}}>Login</Typography>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email' value={email} onChange={handleEmail}/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required value={password} onChange={handlePassword}/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}} onClick={handleLogin}> SUBMIT</Button>
                </Grid>
                    ):(
                        <>
                    <Grid item >
                    <Card elevation={0}sx={{margin:5,alignItems:'center',display:'flex',flexDirection:'column'}}>
                        <CardMedia
                        component="img"
                        height="400"
                        image={Login}
                        alt="image null"
                        sx={{margin:1,objectFit:'contain'}}
                        />
                    </Card>
                </Grid>
                <Grid item sx={{display:'grid',placeItems:'center'}}>
                    <img src={Logo} alt="null" height='100'/>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold'}}>IKonnect</Typography>
                    <Typography sx={{fontFamily:'monospace',fontWeight:'bold'}}>Login</Typography>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email'  value={email} onChange={handleEmail}/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required value={password} onChange={handlePassword}/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}} onClick={handleLogin}> LOGIN</Button>
                </Grid>
                </>
                    )
                }
            </Grid>
        </>
     );
}
 
export default LoginPage;