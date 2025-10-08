import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Greenhouse from "./pages/Greenhouse.jsx";
import WinterDome from "./pages/WinterDome.jsx";
import Contact from "./pages/Contact.jsx";
import DomeKits from "./pages/DomeKits.jsx";
import EventDome from "./pages/EventDome.jsx";
import Gallery from "./pages/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "greenhouse", element: <Greenhouse /> },
      { path: "winterDome", element: <WinterDome /> },
      { path: "domekits", element: <DomeKits /> },
      { path: "eventdome", element: <EventDome /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
