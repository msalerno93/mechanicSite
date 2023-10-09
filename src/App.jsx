import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router";


function App() {

  return (
    <>
    <NavBar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </>
  )
}

export default App
