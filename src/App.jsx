import { Routes, Route } from "react-router";

import PageWrap from "./global/PageWrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import StyleGuide from "./pages/StyleGuide";

function App() {

  //Logic

  //HTML
  return (

    <Routes>
      <Route path="/" element={< PageWrap />} />
        <Route index element={< Home/>}></Route>
        <Route path="Home" element={ <Home />}></Route>
        <Route path="work" element={ <Work />}></Route>
        <Route path="about" element={ <About/>}></Route>
        <Route path="style-guide" element={ <StyleGuide />}></Route>
    </Routes>


 
  );
}

export default App
