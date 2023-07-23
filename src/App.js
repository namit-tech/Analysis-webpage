import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from './components/NavBar';
import "./style/NavBar.css"
import { Content } from './components/Content';
import "./style/content.css";
import { Data } from './components/Data';
import "./style/data.css"
import { Strategy } from './components/Strategy';
import"./style/strategy.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Content />
      <Data />
      <Strategy />
    </Router>
  );
}

export default App;
