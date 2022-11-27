import { Grid,Card, CardMedia, CardContent, Typography, TextField, Button } from "@mui/material";
import Login from "./image/login.svg";
import Logo from "./image/logo.png";
import {useTheme} from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const theme= useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate= useNavigate();
    return ( 
        <>
            <Grid container direction='row'  sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                {
                    isMatch ?(
                        <Grid item sx={{display:'grid',placeItems:'center'}}>
                    <img src={Logo} alt="null" height='100'/>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontWeight:'bold'}}>IKonnect</Typography>
                    <Typography sx={{fontFamily:'monospace',fontWeight:'bold'}}>Register</Typography>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email'/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Confirm Password'type='password' required/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}}> SUBMIT</Button>
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
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email'/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Confirm Password'type='password' required/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}} > SUBMIT</Button>

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