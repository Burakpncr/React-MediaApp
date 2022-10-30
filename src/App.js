import { Routes, Route} from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Todos from './Pages/Todos'
import Posts from './Pages/Posts'
import Albums from './Pages/Albums'

function App() {
  return (
    <div>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="posts" element={<Posts />} />
        <Route path="albums" element={<Albums />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
