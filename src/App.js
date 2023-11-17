import logo from "./ump.png";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to="https://ump.ac.id/" target="_blank">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </BrowserRouter>
        <p>
          <h1 className="text-[60px] mt-5">Agam Pratama</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
