
import {useState} from 'react'
//STYLES 
import './App.css';

// SECTIONS
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Home from './PAGES/Home';
import {Fragment} from 'react'


import Root from './PAGES/Root';
//REACT ROUTER DOM
import {createBrowserRouter, RouterProvider, json} from 'react-router-dom'

//COMPONENTS 
import AboutMe from './COMPONENTS/AboutMe';
import MyWork from './COMPONENTS/MyWork';
import Contact from './COMPONENTS/Contact';
import HeaderImg from './COMPONENTS/HeaderImg';


//PAGES 
import DataPrivacy from './PAGES/DataPrivacy';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <HeaderImg/>
      },
      {
        path: '/aboutme',
        element: <AboutMe/>
      },
      {
        path: '/mywork',
        element: <MyWork/>,
        
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/dataprivacy',
        element: <DataPrivacy/>

      }
    ] 

  },
  /*
  {
    path: '/aboutme',
    element: <AboutMe/>
  },
  {
    path: '/mywork',
    element: <MyWork/>
  }'/'
  */
])


function App() {




  return (
    <Fragment>

      <RouterProvider router={router}>

      </RouterProvider>

      

    </Fragment>
    
  );
}

export default App;
