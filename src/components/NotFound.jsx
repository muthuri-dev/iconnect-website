import { Grid, Typography } from "@mui/material";



const NotFound = () => {
    return ( <>
        <Grid container sx={{display:'grid',placeContent:'center'}}>
            <Grid item>
                <Typography color='error' variant="h4">404</Typography>
            </Grid>
            <Grid item>
                <Typography>Page Not Found</Typography>
            </Grid>
        </Grid>
    </> );
}
 
export default NotFound;