import { Grid } from "@mui/material";
import Wave from "react-wavify"

const Footer = () => {
    return ( 
        <>
        <Grid container sx={{marginTop:20}}>
            <Grid item>
            <Wave
             fill="#1A8724"
             paused={false}
             options={{
            height:40,
            amplitude:40,
            speed:0.30,
            points:6
        }} 
        />
            </Grid>
        </Grid>
        </>
     );
}
 
export default Footer;