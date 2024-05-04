
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './compoents/Header';
import Displaycounter from './compoents/Displaycounter';
import Container from './compoents/container';
import Controls from './compoents/controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './compoents/PrivacyMessage';
function App() {


  const privacy= useSelector(store=>store.privacy)
  return (
 <>
 <center>
 <Container>
  <div className="px-4 py-5 my-5 text-center">
      <Header></Header>
    <div className="col-lg-6 mx-auto">
     {privacy ? <PrivacyMessage/>:<Displaycounter/>} 
       <Controls></Controls>
    </div>
  </div>
  </Container>
 </center>
 </>
  );
}

export default App;
