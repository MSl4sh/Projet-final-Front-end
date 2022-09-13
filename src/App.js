import './App.css';
import {useRoutes} from "react-router-dom"
import {routes} from "./Routes"
import { UidContext } from './components/AppContext';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const[uid, setUid]= useState(null)

  useEffect(() =>{
    const fetchToken = async() =>{
      await axios({
        method:'GET',
        url:`${process.env.REACT_APP_API_URL}jsonWebTokenId`,
        withCredentials:true
      })
      .then((res) => {
        console.log(res)
        setUid(res.data)
      })
      .catch((err)=> console.log("Pas de token!"))
    }
    fetchToken()
  }, [uid])

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
