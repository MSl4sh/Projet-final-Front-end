import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Users from "./pages/Users";
import Connection from "./pages/Connection"



export const routes= [
    {
        path:"home",
        element: <Home/>

    },
    {
        path:"profil",
        element: <Profil/>

    },
    {
        path:"connection",
        element: <Connection/>
    },
    {
        path:"users",
        element: <Users/>

    },
    {
        path:"",
        element: <Home/>

    },

]