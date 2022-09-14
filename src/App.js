import './App.css';
import {useRoutes} from "react-router-dom"
import {routes} from "./Routes"
import { UidContext } from './components/AppContext';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const[uid, setUid]= useState(null)

  useEffect(() =>{
    console.log("hello")
    const fetchToken = async() =>{
      console.log("là c'est bon")
      await axios({
        method:'GET',
        url:`${process.env.REACT_APP_API_URL}jsonWebTokenId`,
        // withCredentials:true
      })
        .then((res) => {
          console.log("res")
          setUid(res.data)
        })
        .catch((err)=> console.log("Pas de token!"))
    }
    fetchToken()
  }, [])
  

  const element = useRoutes(routes)
  return (
    <UidContext.Provider value={uid}>
    <div className="App">
      {element}
    </div>
    </UidContext.Provider>
  );
};

export default App;
