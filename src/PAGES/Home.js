import {Outlet} from 'react-router-dom'

import Header from '../Header';
import AboutMe from '../COMPONENTS/AboutMe';
import MyWork from '../COMPONENTS/MyWork';
import Contact from '../COMPONENTS/Contact'

function Home(){

    return(
        <div> 
            <h1> homeeee</h1>
            <Outlet/>
        </div>
    )
}

export default Home;