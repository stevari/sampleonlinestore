
import './App.css';
//import CustomButton from './components/CustomBtn';
import Navbar from './components/NavBar';
//import Card from './components/Card';
import background from "./img/background.jpg";
import CustomCard from './components/CustomCard';

function App() {
  return (
    
    <div className="App" style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar/>
      <h1>Sample Online Store</h1>
      <h3>made by Ville Vartia</h3>
      <br/>
      <div className='parent'>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
      </div>
     
    </div>
  );
}

export default App;
