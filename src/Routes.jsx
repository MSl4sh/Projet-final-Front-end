import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";



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
        path:"trending",
        element: <Trending/>

    },
    {
        path:"",
        element: <Home/>

    },

]