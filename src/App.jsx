import {BrowserRouter as Switch, Routes, Route} from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./views/Home";
import {useState, useEffect} from "react";
import NotFound from "./components/NotFound";
import LoginPage from "./views/log/login";
import RegisterPage from "./views/log/register";

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
      loading ? <Loader/> 
      :<Switch>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </Switch>
     }
    </div>
  );
}

export default App;
