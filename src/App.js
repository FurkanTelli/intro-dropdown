import './App.css';
import Content from './components/MainContent';
import NavBar from './components/NavBar';
import { useState } from "react";
import { storage } from "./components/Context";


function App() {
  const [toggleBox, setToggleBox] = useState(false);
  const [toggleBox2, setToggleBox2] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(true);

  const data = {
    toggleBox,
    setToggleBox,
    toggleBox2,
    setToggleBox2,
    hamburgerMenu,
    setHamburgerMenu
  }
  return (
    <storage.Provider value={data}  className="App">
      <NavBar/>
      <Content/>
    </storage.Provider>
  );
}

export default App;
