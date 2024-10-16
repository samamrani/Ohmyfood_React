import Fonctionnement from "../composants/Fonctionnement";
import Localisez from "../composants/Localisez";
import Resto from "../composants/Resto";

function Home(){
  return(
    <>
      <Localisez />
      <Fonctionnement />
      <Resto />    
    </>
  )
}
export default Home;