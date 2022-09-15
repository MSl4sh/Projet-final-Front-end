import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";
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
        path:"trending",
        element: <Trending/>

    },
    {
        path:"",
        element: <Home/>

    },

]