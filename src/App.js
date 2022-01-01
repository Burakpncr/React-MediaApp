import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Todos from './Pages/Todos'

function App() {
  return (
    <div>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
