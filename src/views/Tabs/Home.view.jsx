import { Grid, Typography } from "@mui/material";
import App from "./image/app.png";

const HomeView = () => {
    return ( 
        <>
        <Grid container direction='column' sx={{marginTop:7}}>
            <Grid item container>
                <div className="below">
                    <Grid item>
                    <Typography>Kenya</Typography>
                    </Grid>
                        <Grid item>
                            <img src={App} alt='image'  height='400'/>
                    </Grid>
                </div>
             </Grid>
        </Grid>
        </>
     );
}
 
export default HomeView;