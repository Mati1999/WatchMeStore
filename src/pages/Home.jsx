import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import './Home.scss'
import Navbar from "../components/Navbar";

const Home = () => {
  const [datos,setDatos] = useState([1,2,3,4,5]);


  return (
    <div className="home">
      <Navbar />
    </div>
  )
}

export default Home