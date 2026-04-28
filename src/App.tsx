/* Developpeur principal Elisee onyembo 
*Elisee Dev porte folio SOE Google 
*Os07 alias
=================================================
 */
//Point dentree de l'application fichier principale
//la fonction principale
//-----------------------------------------------------

import { Route, Routes } from "react-router-dom";

import NavComponent from "./Components/layout/Nav_bar";
import HomePage from "./pages/Home/HomePage";
import StorePage from "./pages/store/StorePage";


function App(){
  return(
    <>
     <NavComponent/>
    <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/store" element={<StorePage />} />
</Routes>
     
    </>
    
  )
}

export default App;