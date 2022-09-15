import './App.css';
import {useRoutes} from "react-router-dom"
import {routes} from "./Routes"
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import store from "../src/store/store"


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
    <Provider store={store}>
    <div className="App">
      {element}
    </div>
    </Provider>
  );
};

export default App;
