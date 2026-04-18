/* Developpeur principal Elisee onyembo 
*Elisee Dev porte folio SOE Google 
*Os07 alias
=================================================
 */
//Point dentree de l'application fichier principale
//la fonction principale
//-----------------------------------------------------

import Footer from "./Components/parents/Footer";
import NavComponent from "./Components/parents/Nav_bar";
import HomePage from "./pages/Home/HomePage";


function App(){
  return(
    <>
     <NavComponent/>
     <HomePage/>
     <Footer/>
    </>
    
  )
}

export default App;