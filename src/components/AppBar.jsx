import { Home, Newspaper, Person2Outlined } from "@mui/icons-material";
import {AppBar, Grid, Tab, Tabs, Toolbar,useMediaQuery,useTheme,Box ,Typography} from "@mui/material";
import Logo from "../assets/logo.ico";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeView from "../views/Tabs/Home.view";
import MyDrawer from "./Drawer";

  

const MyAppBar = () => {
  const[tabIndex, setTabIndex]= useState(0);

  const handleTabChange = (event, index)=>{
    setTabIndex(index);
  }

  const theme= useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return ( 
        <>
        <AppBar sx={{backgroundColor:'green'}}>
            <Toolbar>
                <Grid container sx={{display:'flext',justifyContent:'space-between'}}>
                    <Grid item > 
                        <img src={Logo} alt="logo" height='60' />
                    </Grid>
                    <Grid item>
                       {
                        isMatch ?(
                          <Box sx={{marginLeft:'auto'}}>
                          <MyDrawer/>
                           </Box>
                        ):(
                          <Box>
                         <Tabs value={tabIndex} onChange={handleTabChange} centered textColor='inherit' indicatorColor="secondary">
                           <Tab label="Home" icon={<Home/>} iconPosition='start'/>
                           <Tab label="Peers" icon={<Person2Outlined/>} iconPosition='start'/>
                           <Tab label="News" icon={<Newspaper/>} iconPosition='start'/>
                           <Tab label="Blogs" icon={<Newspaper/>} iconPosition='start'/>
                         </Tabs>
                       </Box>
                        )
                       }
                  </Grid>
                    <Grid item>
                        <AccountCircleIcon sx={{fontSize:40, marginTop:2}}/>
                    </Grid>
                </Grid>
                   </Toolbar>
               </AppBar>
                   <Box sx={{ padding: 2 }}>
                   {tabIndex === 0 && (
                     <Box>
                       <HomeView/>
                     </Box>
                   )}
                   {tabIndex === 1 && (
                     <Box>
                       <Typography>The second tab</Typography>
                     </Box>
                   )}
                   {tabIndex === 2 && (
                     <Box>
                       <Typography>The third tab</Typography>
                     </Box>
                   )}
                   {tabIndex === 3 && (
                     <Box>
                       <Typography>The third tab</Typography>
                     </Box>
                   )}
                 </Box>
        </>
     );
}
 
export default MyAppBar;