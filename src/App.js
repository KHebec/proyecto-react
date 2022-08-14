import "./App.css";
import Gallery from "./components/gallery/Gallery";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <Gallery />
    </div>
  );
}

export default App;
