

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Project from "./Project.jsx";
import Certification from "./Certification.jsx";
import Feedback from "./Feedback.jsx";
import Profile from "./Profile.jsx";

function App() {
 

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path='/certificate' element={<Certification/>}></Route>
          <Route path='/feedback' element={<Feedback/>}></Route>
   
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
