import {BrowserRouter as Switch, Routes, Route} from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./views/Home";
import {useState, useEffect} from "react";
import NotFound from "./components/NotFound";
import LoginPage from "./views/log/login";
import RegisterPage from "./views/log/register";
import Mentors from "./views/main/Mentors";
import Projects from "./views/main/Projects";
import PeersView from "./views/Tabs/Peers.View";
import NewsView from "./views/Tabs/News.View";
import BlogsView from "./views/Tabs/Blogs.View";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[]);
  return (
    <div className="App">
     {
      loading ? <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Loader/> 
      </div>
      :<Switch>
      <Routes>
        <Route exact  path='/' element={<RegisterPage/>}/>
        <Route exact  path='/login' element={<LoginPage/>}/>
        <Route exact  path="/home" element={<Home/>}/>
        <Route exact  path='/mentors' element={<Mentors/>}/>
        <Route exact  path='/projects' element={<Projects/>}/>
        <Route exact  path='/peers' element={<PeersView/>}/>
        <Route exact  path='/news' element={<NewsView/>}/>
        <Route exact  path='/blogs' element={<BlogsView/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </Switch>
     }
    </div>
  );
}

export default App;
