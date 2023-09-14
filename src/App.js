
import {Fragment} from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//STYLES 
import './App.css';



//PAGES
import Root from "./PAGES/Root";
import AboutMe from './PAGES/AboutMe';
import MyWork from './PAGES/MyWork';
import Contact from './PAGES/Contact';
import HeaderImg from './PAGES/HeaderImg';
import DataPrivacy from './PAGES/DataPrivacy';
import Impressum from './PAGES/Impressum'


//SEO
import { Helmet } from 'react-helmet';


const router = createBrowserRouter([
  {
    path: "/shaanabrownnaeckler",
    element: <Root />,
    children: [
      {
        path: "/shaanabrownnaeckler",
        element: <HeaderImg />,
      },
      {
        path: "/shaanabrownnaeckler/über-mich",
        element: <AboutMe />,
      },
      {
        path: "/shaanabrownnaeckler/meine-dienstleistungen",
        element: <MyWork />,
      },
      {
        path: "/shaanabrownnaeckler/kontakt",
        element: <Contact />,
      },
      {
        path: "/shaanabrownnaeckler/datensicherheit",
        element: <DataPrivacy />,
      },
      {
        path: "/shaanabrownnaeckler/impressum",
        element: <Impressum />,
      },
    ],
  },
]);


function App() {

  return (
  

      <RouterProvider router={router}>
        <Helmet>
          <title> Hebamme in Hamburg: Shaana Brown Näckler</title>
        </Helmet>

      </RouterProvider>
      


    
  );
}

export default App;
