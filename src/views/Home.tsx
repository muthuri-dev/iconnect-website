import { Grid } from "@mui/material";
import MyAppBar from "../components/AppBar";
import Footer from "../components/footer";

const Home:React.FC = () => {
    return ( 
        <>
        <Grid container direction='column' >
            <Grid item> <MyAppBar/></Grid>
            <Grid item><Footer/></Grid>
        </Grid>
        </>
     );
}
 
export default Home;