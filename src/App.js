// import logo from './logo.svg';
import './App.css'
import About from "./components/About"
import Photos from "./components/Photos"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Teams from "./components/Teams"
import Playlist from "./components/Playlist"
import { HashRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    // <>
    <HashRouter>
    <Nav />
    <Routes>
    <Route path={"/"} element={<Home />} />
    {/* <Route path={"/teams"} element={<Teams />} /> */}
    <Route path={"/about"} element={<About />} />
    <Route path={"/photos"} element={<Photos />} />
    <Route path={"/playlist"} element={<Playlist />} />
    </Routes>
    <Footer />
    </HashRouter>
    // </>
  );
}

export default App;
