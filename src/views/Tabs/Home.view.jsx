import { Card, CardActions, CardContent,CardMedia, Grid, Typography,Button } from "@mui/material";
import App from "./image/app.png";
import Background from "./image/back.svg";
import Community from "./image/community.svg";
import Article from "./image/article.svg";
import News from "./image/news.svg";
import Projects from "./image/fourth.svg";
import Meet from "./image/meet.svg";
import { Person2Outlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
    const navigate= useNavigate();
    return ( 
        <>
        <Grid container direction='column' sx={{marginTop:7,alignItems:'center',dispaly:'flex'}}>
            <Grid item container sx={{ display:'flex', justifyContent:'center',alignContent:'center',backgroundImage:`url(${Background})`,backgroundPosition:'center',backgroundRepeat:'no-repeat'}} >
                    <Grid item sx={{width:'400px',justifyContent:'center'}}>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontSize:25,fontWeight:'bold'}}>Meet</Typography>
                    <Typography sx={{color:'green',fontFamily:'monospace',fontSize:25,fontWeight:'bold'}}>without a Hitch</Typography>
                    <Typography sx={{fontFamily:'monospace',marginTop:3}}>Interact easily without any hassle with IKonnect to the other tech peers and also get to share your experiences</Typography>
                    </Grid>
                        <Grid item sx={{display:'grid', placeContent:'center',width:'400px'}}>
                            <img src={App} alt='null'  height='400'/>
                    </Grid>
             </Grid>
             <Grid item container spacing={0} sx={{display:'flex', justifyContent:'center',alignContent:'center',marginTop:2}}>
                <Grid item >
                    <Card elevation={0} sx={{width:'400px',}}>
                        <CardMedia
                        component="img"
                        height="250"
                        image={Community}
                        alt="image null"
                        sx={{margin:1,objectFit:'contain'}}
                        />
                    </Card>
                </Grid>
                <Grid item sx={{width:'400px'}}>
                    <Card elevation={0}  direction='row' sx={{height:'300px'}}>
                        <CardContent >
                            <Typography sx={{fontFamily:'monospace',color:'green', fontWeight:'bold'}}>Connect with community of developers</Typography>
                            <Typography sx={{marginTop:'40px'}}>The social App that connects developers together to build a community and interact with each other. Share your projects on the platform and get theme posted on your social media accounts.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
             </Grid>
             <Grid item container spacing={0} sx={{display:'flex', justifyContent:'center',alignContent:'center',marginTop:2}}>
             <Grid item sx={{width:'400px'}}>
                    <Card elevation={0}  direction='row' sx={{height:'300px'}}>
                        <CardContent >
                            <Typography sx={{fontFamily:'monospace',color:'green', fontWeight:'bold'}}>Articles and Blogs</Typography>
                            <Typography sx={{marginTop:'40px'}}>View Articles that can help you grow your skill to higher level. Post a blog on platform about your experiences.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item >
                    <Card elevation={0} sx={{width:'400px',}}>
                        <CardMedia
                        component="img"
                        height="250"
                        image={Article}
                        alt="image null"
                        sx={{margin:1,objectFit:'contain'}}
                        />
                    </Card>
                </Grid>
             </Grid>
             <Grid item container spacing={0} sx={{display:'flex', justifyContent:'center',alignContent:'center',marginTop:2}}>
                <Grid item >
                    <Card elevation={0} sx={{width:'400px',}}>
                        <CardMedia
                        component="img"
                        height="250"
                        image={News}
                        alt="image null"
                        sx={{margin:1,objectFit:'contain'}}
                        />
                    </Card>
                </Grid>
                <Grid item sx={{width:'400px'}}>
                    <Card elevation={0}  direction='row' sx={{height:'300px'}}>
                        <CardContent >
                            <Typography sx={{fontFamily:'monospace',color:'green', fontWeight:'bold'}}>Tech News</Typography>
                            <Typography sx={{marginTop:'40px'}}>Get to view news on the platfrom and also share information on this platform.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
             </Grid>
             <Grid item container spacing={0} sx={{display:'flex', justifyContent:'center',alignContent:'center',marginTop:2}}>
             <Grid item sx={{width:'400px'}}>
                    <Card elevation={0}  direction='row' sx={{height:'300px'}}>
                        <CardContent >
                            <Typography sx={{fontFamily:'monospace',color:'green', fontWeight:'bold'}}>Share and view Projects</Typography>
                            <Typography sx={{marginTop:'40px'}}>Sharing with others is the best form of being greatful for what we have got. Post your projects on the platform for community to view. Peers can get to like and share your projects.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'onClick={()=>navigate('/projects')} sx={{backgroundColor:'green'}}>Projects</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item >
                    <Card elevation={0} sx={{width:'400px',}}>
                        <CardMedia
                        component="img"
                        height="250"
                        image={Projects}
                        alt="image null"
                        sx={{margin:1,objectFit:'contain'}}
                        />
                    </Card>
                </Grid>
             </Grid>
             <Grid item container spacing={0} sx={{display:'flex', justifyContent:'center',alignContent:'center',marginTop:2,marginBottom:2}}>
                <Grid item >
                    <Card elevation={0} sx={{width:'400px',}}>
                        <CardMedia
                        component="img"
                        height="250"
                        image={Meet}
                        alt="image null"
                        sx={{margin:1,objectFit:'contain'}}
                        />
                    </Card>
                </Grid>
                <Grid item sx={{width:'400px'}}>
                    <Card elevation={0}  direction='row' sx={{height:'300px'}}>
                        <CardContent >
                            <Typography sx={{fontFamily:'monospace',color:'green', fontWeight:'bold'}}>Meet with Mentors online</Typography>
                            <Typography sx={{marginTop:'40px'}}>View Mentors on this platform and get to meet them through get to schedule a meeting through the platform.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'onClick={()=>navigate('/mentors')} sx={{backgroundColor:'green'}}>Meet Mentor</Button>
                        </CardActions>
                    </Card>
                </Grid>
             </Grid>
             <Grid item >
                    <Typography sx={{color:'green',fontFamily:'monospace', fontWeight:'bold',fontSize:20}}>What people say About Us</Typography>
                </Grid>
                <Grid item container spacing={7} sx={{display:'flex', justifyContent:'center',alignContent:'center',marginTop:1}}>
                    <Grid item >
                        <Card elevation={3}  sx={{width:'300px',height:'250px'}} >
                            <CardContent sx={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                                <Person2Outlined fontSize="large"/>
                                <Typography sx={{fontFamily:'monospace',color:'green'}}>Damaris Kanyua</Typography>
                                <Typography>CS Student at University of Embu</Typography>
                                <Typography>The platfrom will increase the interaction between developers.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item >
                        <Card elevation={3} sx={{width:'300px',height:'250px'}} >
                            <CardContent sx={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                                <Person2Outlined fontSize="large"/>
                                <Typography sx={{fontFamily:'monospace',color:'green'}}>Joshua Onyango</Typography>
                                <Typography>Electrical Engineering Student at University of Moi</Typography>
                                <Typography>The platfrom will enable me to share projects to another social media platforms.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item >
                        <Card elevation={3}  sx={{width:'300px',height:'250px'}}>
                            <CardContent sx={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                                <Person2Outlined fontSize="large"/>
                                <Typography sx={{fontFamily:'monospace',color:'green'}}>Newton Muragiri</Typography>
                                <Typography>CS Student at Kentatta University</Typography>
                                <Typography>The platfrom will get show developers a new projects without going to gitHub.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </Grid>
        </>
     );
}
 
export default HomeView;