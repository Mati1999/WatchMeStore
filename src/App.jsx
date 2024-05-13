import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from "./pages/Contact";
import Prod from "./components/Prod";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={'/prod/:id'} element={<Prod />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
