import Home from "./Home";
import QuizCard from "./Componant/QuizCard";
import Navbar from "./Componant/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
       <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
