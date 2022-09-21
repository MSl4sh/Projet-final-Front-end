import Nav from "../components/navbar/nav"
import style from "../../src/pages/pages.module.css"

import Publication from "../components/Publication/publication";


const Home = () => {
    

    return (
        <div >
            <div>
            <Nav/>
            </div>
            <div className={style.publication}>

                <Publication/>
                
            </div>
        </div>
    );
};

export default Home;