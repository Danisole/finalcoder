import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter } from 'react-router-dom'


function App() {

  
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer msjPropos="mi tutor coder"/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
