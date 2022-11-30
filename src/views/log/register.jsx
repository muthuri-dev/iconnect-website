import { Grid,Card, CardMedia, CardContent, Typography, TextField, Button } from "@mui/material";
import Login from "./image/login.svg";
import Logo from "./image/logo.png";
import {useTheme} from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
    const theme= useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate= useNavigate();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [password2,setPassword2]= useState('');

  function handleEmail(event){
    setEmail(event.target.value);
  }
  function handlePassword(event){
    setPassword(event.target.value);
  }
  function handlePassword2(event){
    setPassword2(event.target.value);
  }
  function handleRegister(event){
    event.preventDefault();
    
    if(password===password2){
        const newUser=({
            password:password,
            email:email,
        });
        axios.post('http://localhost:8000/IKonnect/register/',newUser)
            .then(response=>{
                if(response.status===200){
                    navigate('/login');
                }
            })
            .catch(error=>console.log(error.message))
    }else{
        window.alert('Password must match');
    }
  }
  
    return ( 
        <>
            <Grid container direction='row'  sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                {
                    isMatch ?(
                        <Grid item sx={{display:'grid',placeItems:'center'}}>
                    <img src={Logo} alt="null" height='100'/>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold'}}>IKonnect</Typography>
                    <Typography sx={{fontFamily:'monospace',fontWeight:'bold'}}>Register</Typography>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email' value={email} onChange={handleEmail}/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required value={password} onChange={handlePassword}/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Confirm Password'type='password' required value={password2} onChange={handlePassword2}/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}} onClick={handleRegister}> SUBMIT</Button>
                </Grid>
                    ):(
                        <>
                    <Grid item >
                    <Card elevation={2}sx={{backgroundColor:'green',margin:5,alignItems:'center',display:'flex',flexDirection:'column'}}>
                        <CardMedia
                        component="img"
                        height="400"
                        image={Login}
                        alt="image null"
                        sx={{margin:1,objectFit:'contain'}}
                        />
                        <CardContent>
                            <Typography sx={{color:'white',fontFamily:'monospace',marginBottom:4}}>Easy to connect</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{display:'grid',placeItems:'center'}}>
                    <img src={Logo} alt="null" height='100'/>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold'}}>IKonnect</Typography>
                    <Typography sx={{fontFamily:'monospace',fontWeight:'bold'}}>Register</Typography>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email' value={email} onChange={handleEmail}/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required value={password} onChange={handlePassword}/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Confirm Password'type='password' required value={password2} onChange={handlePassword2}/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}} onClick={handleRegister}> SUBMIT</Button>

                    <Typography>Already have an Account? <Button onClick={()=>navigate('/login')} variant='text'>Login</Button></Typography>
                </Grid>
                </>
                    )
                }
            </Grid>
        </>
    );
}
 
export default RegisterPage;