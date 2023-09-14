
import {Outlet} from 'react-router-dom'

import Header from '../COMPONENTS/Header'
import Footer from '../COMPONENTS/Footer'



function Root(){


    return(
        <div>
            <div>      
                <Header/>
            </div>

           


            <main>
                <Outlet/> 
            </main>

            
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Root;