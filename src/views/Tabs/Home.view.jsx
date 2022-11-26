import { Grid, Typography } from "@mui/material";
import App from "./image/app.png";
import Background from "./image/back.svg";

const HomeView = () => {
    return ( 
        <>
        <Grid container direction='column' sx={{marginTop:7,}}>
            <Grid item container sx={{ display:'flex', justifyContent:'center',alignContent:'center',backgroundImage:`url(${Background})`,backgroundPosition:'center',backgroundRepeat:'no-repeat'}} >
                    <Grid item sx={{width:'400px',justifyContent:'center'}}>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontSize:25,fontWeight:'bold'}}>Meet</Typography>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontSize:25,fontWeight:'bold'}}>without a Hitch</Typography>
                    <Typography sx={{fontFamily:'monospace'}}>Interact easily without any hassle with IKonnect to the other tech peers and also get to share your experiences</Typography>
                    </Grid>
                        <Grid item sx={{display:'grid', placeContent:'center',width:'400px'}}>
                            <img src={App} alt='image'  height='400'/>
                    </Grid>
             </Grid>
             <Grid item container>
                <Grid item></Grid>
             </Grid>
        </Grid>
        </>
     );
}
 
export default HomeView;