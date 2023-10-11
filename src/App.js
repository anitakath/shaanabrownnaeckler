import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//STYLES
import "./App.css";

//COMPONENTS
import Layout from "./COMPONENTS/Layout";
import HeaderImg from "./COMPONENTS/HeaderImg";

//PAGES
import AboutMe from "./pages/uebermich";
import MyWork from "./pages/meinedienstleistungen";
import Contact from "./pages/kontakt";
import DataPrivacy from "./pages/datenschutz";
import Impressum from './pages/impressum'

//SEO
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HeaderImg />,
      },
      {
        path: "/ueber-mich",
        element: <AboutMe />,
      },
      {
        path: "/meine-dienstleistungen",
        element: <MyWork />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
      },
      {
        path: "/datensicherheit",
        element: <DataPrivacy />,
      },
      {
        path: "/impressum",
        element: <Impressum />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Helmet>
        <title> Hebamme in Hamburg: Shaana Brown Näckler </title>
        <meta
          name="keywords"
          content="Hebamme, Hamburg, Altona, Eimsbüttel, Eppendorf, Sternschanze,
          St. Pauli, Ottensen, Bahrenfeld, Shaana Brown Näckler,
          Schwangerenvorsorge, Wochenbett, Stillzeit, Pinard-Rohr, Baby,
          Babypflege, Schwangerschaft, Schwangerschaftsbetreuung,
          Geburtsvorbereitung, Wochenbettbetreuung, Stillberatung, Babymassage,
          Elternberatung, Geburtsbegleitung, Familienplanung, Nachsorge,
          Hebammenbetreuung, Wochenbettbetreuung für zu Hause, Beratung bei
          Schwangerschaftsbeschwerden"
        />
        <meta
          name="description "
          content="offizielle Homepage der Hebamme Shaana Brown Näckler, Hamburg"
        />
      </Helmet>
    </RouterProvider>
  );
}

export default App;
