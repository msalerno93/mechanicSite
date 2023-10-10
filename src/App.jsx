import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router";


function App() {

  return (
    <div className="bg-gray-200">
    <NavBar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
