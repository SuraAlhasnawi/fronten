import Home from "./pages/home/Home";
import "./App.css";
import Contact from "./pages/contact/Contact";
import Singlepost from "./pages/singlepost/Singlepost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/post/:postId" element={<Singlepost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
