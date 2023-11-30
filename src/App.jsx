import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router";
// import Services from "./pages/Services";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <div className="bg-gray-200">
    <NavBar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      {/* <Route path="/services" element={<Services/>}/> */}
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
