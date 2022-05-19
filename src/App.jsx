import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Pg10 from "./pages/pg10/Pg10";
import Pg54 from "./pages/pg54/Pg54";
import Pg55 from "./pages/pg55/Pg55";
import Pg59 from "./pages/pg59/Pg59";
import Pg58 from "./pages/pg58/Pg58";
import Pg57 from "./pages/pg57/Pg57";
import Pg66 from "./pages/pg66/Pg66";
import Pg14 from "./pages/pg14/Pg14";
import Pg56 from "./pages/pg56/Pg56";
import Pg37 from "./pages/pg37/Pg37";
import Pg16 from "./pages/pg16/Pg16";
import Pg51 from "./pages/pg51/Pg51";
import Pg11 from "./pages/pg11/Pg11";
import Pg12 from "./pages/pg12/Pg12";
import Pg49 from "./pages/pg49/Pg49";
import Pg53 from "./pages/pg53/Pg53";
import Pg9 from "./pages/pg9/Pg9";
import Pg34 from "./pages/pg34/Pg34";
import Pg8 from "./pages/pg8/Pg8";
import Pg4_5 from "./pages/pg4_5/Pg4&_5";
import Pg7 from "./pages/pg7/Pg7";
import Pg60 from "./pages/pg60/Pg60";
import Pg65 from "./pages/pg65/Pg65";
import Pg61 from "./pages/pg61/Pg61";
import Pg15 from "./pages/pg15/Pg15";
import Pg19 from "./pages/pg19/Pg19";
import Pg20 from "./pages/pg20/Pg20";
import Pg21 from "./pages/pg21/Pg21";
import Pg17 from "./pages/pg17/Pg17";
import Pg22 from "./pages/pg22/Pg22";
import Pg18 from "./pages/pg18/Pg18";
import Pg72_70_71 from "./pages/pg72_70_71/Pg72_70_71";
import Pg40 from "./pages/pg40/Pg40";
import Pg50 from "./pages/pg50/Pg50";
import Pg23 from "./pages/pg23/Pg23";
import Pg33 from "./pages/pg33/Pg33";
import Pg36 from "./pages/pg36/Pg36";
import Pg38 from "./pages/pg38/Pg38";
import Pg39 from "./pages/pg39/Pg39";
import Pg32 from "./pages/pg32/Pg32";
import Pg29 from "./pages/pg29/Pg29";
import Pg25 from "./pages/pg25/Pg25";
import Pg35 from "./pages/pg35/Pg35";
import ProgressBar from "./components/progressBar/ProgressBar";
import Pg6 from "./pages/pg6/Pg6";
import Pg24 from "./pages/pg24/Pg24";
import Pg26 from "./pages/pg26/Pg26";
import Pg28 from "./pages/pg28/Pg28";
import Pg31 from "./pages/pg31/Pg31";
import Pg30 from "./pages/pg30/Pg30";
import Pg45 from "./pages/pg45/Pg45";
import Pg48 from "./pages/pg48/Pg48";
import Pg47 from "./pages/pg47/Pg47";
import Pg43 from "./pages/pg43/Pg43";
import Pg62 from "./pages/pg62/Pg62";
import Pg44 from "./pages/pg44/Pg44";
import Pg52 from "./pages/pg52/Pg52";
import Pg41 from "./pages/pg42/Pg42";
import Pg27 from "./pages/pg27/Pg27";
import Pg42 from "./pages/pg41/Pg41";
import Pg70 from "./pages/pg70/Pg70";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/54", element: <Pg54 /> },
    { path: "/55", element: <Pg55 /> },
    { path: "/59", element: <Pg59 /> },
    { path: "/58", element: <Pg58 /> },
    { path: "/57", element: <Pg57 /> },
    { path: "/66", element: <Pg66 /> },
    { path: "/10", element: <Pg10 /> },
    { path: "/14", element: <Pg14 /> },
    { path: "/56", element: <Pg56 /> },
    { path: "/70", element: <Pg70 /> },
    { path: "/27", element: <Pg27 /> },
    { path: "/37", element: <Pg37 /> },
    { path: "/16", element: <Pg16 /> },
    { path: "/17", element: <Pg17 /> },
    { path: "/51", element: <Pg51 /> },
    { path: "/52", element: <Pg52 /> },
    { path: "/39", element: <Pg39 /> },
    { path: "/38", element: <Pg38 /> },
    { path: "/36", element: <Pg36 /> },
    { path: "/41", element: <Pg41 /> },
    { path: "/42", element: <Pg42 /> },
    { path: "/50", element: <Pg50 /> },
    { path: "/11", element: <Pg11 /> },
    { path: "/12", element: <Pg12 /> },
    { path: "/49", element: <Pg49 /> },
    { path: "/53", element: <Pg53 /> },
    { path: "/9", element: <Pg9 /> },
    { path: "/34", element: <Pg34 /> },
    { path: "/8", element: <Pg8 /> },
    { path: "/4_5", element: <Pg4_5 /> },
    { path: "/7", element: <Pg7 /> },
    { path: "/60", element: <Pg60 /> },
    { path: "/65", element: <Pg65 /> },
    { path: "/61", element: <Pg61 /> },
    { path: "/6", element: <Pg6 /> },
    { path: "/15", element: <Pg15 /> },
    { path: "/19", element: <Pg19 /> },
    { path: "/20", element: <Pg20 /> },
    { path: "/21", element: <Pg21 /> },
    { path: "/22", element: <Pg22 /> },
    { path: "/18", element: <Pg18 /> },
    { path: "/72_70_71", element: <Pg72_70_71 /> },
    { path: "/40", element: <Pg40 /> },
    { path: "/23", element: <Pg23 /> },
    { path: "/32", element: <Pg32 /> },
    { path: "/33", element: <Pg33 /> },
    { path: "/29", element: <Pg29 /> },
    { path: "/25", element: <Pg25 /> },
    { path: "/35", element: <Pg35 /> },
    { path: "/24", element: <Pg24 /> },
    { path: "/26", element: <Pg26 /> },
    { path: "/28", element: <Pg28 /> },
    { path: "/31", element: <Pg31 /> },
    { path: "/30", element: <Pg30 /> },
    { path: "/45", element: <Pg45 /> },
    { path: "/48", element: <Pg48 /> },
    { path: "/47", element: <Pg47 /> },
    { path: "/43", element: <Pg43 /> },
    { path: "/62", element: <Pg62 /> },
    { path: "/44", element: <Pg44 /> },
    { path: "/p", element: <ProgressBar /> },
    { path: "*", element: <div>404 Working</div> },

    // ...
  ]);
  return routes;
};
function App() {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
}

export default App;
