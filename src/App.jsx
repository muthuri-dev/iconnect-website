import {BrowserRouter as Switch, Routes, Route} from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./views/Home";
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);
  return (
    <div className="App">
     {
      loading ? <Loader/> 
      :<Switch>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
     </Switch>
     }
    </div>
  );
}

export default App;
