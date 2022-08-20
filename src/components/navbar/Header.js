import Navbar from "./Navbar";
import imagen from "./../../assets/images/imagen_1.png";
import "./Header.css";



const Header = () => {
  return (
    <div className="header">
        <div><Navbar/></div>
        <div className="banner"><img className="img" src={imagen} alt="imagen"/></div>
    </div>
  )
}

export default Header


