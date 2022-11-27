import { Grid,Card, CardMedia, CardContent, Typography, TextField, Button } from "@mui/material";
import Login from "./image/seventh.svg";
import Logo from "./image/logo.png";
import {useTheme} from "@mui/material";
import {useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

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
                    <Typography sx={{fontFamily:'monospace',fontWeight:'bold'}}>Login</Typography>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email'/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}} onClick={()=>navigate('/')}> SUBMIT</Button>
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
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Email' required type='email'/>
                    <TextField sx={{width:400,margin:1}} variant='outlined'label='Password'type='password' required/>

                    <Button variant='contained' sx={{backgroundColor:'green',marginTop:4}} onClick={()=>navigate('/')}> LOGIN</Button>
                </Grid>
                </>
                    )
                }
            </Grid>
        </>
     );
}
 
export default LoginPage;