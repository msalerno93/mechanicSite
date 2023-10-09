import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router";


function App() {

  return (
    <>
    <NavBar>
      <Routes>
      <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
    </NavBar>
    </>
  )
}

export default App
