import { Home } from "@mui/icons-material";
import { Grid, IconButton,Typography } from "@mui/material";
import Project from "./image/fourth.svg";
import { useNavigate } from "react-router-dom";


const Projects = () => {
    const navigate= useNavigate();
    return ( 
        <>
        <Grid container direction='column' sx={{alignItems:'center'}}>
            <Grid item sx={{position:'fixed',width:'100%',justifyContent:'end',display:'flex'}}>
                <IconButton onClick={()=>navigate('/')}>
                    <Home sx={{color:'green',fontSize:40}}/>
                </IconButton>
            </Grid>
            <Grid item>
                <img src={Project} alt="null" height='300'/>
            </Grid>
            <Grid item>
              <Typography sx={{fontFamily:'mpnospace',fontWeight:'bold',color:'green',marginTop:4}}>Projects</Typography>
            </Grid>
            <Grid item></Grid>
        </Grid>
        </>
     );
}
 
export default Projects;