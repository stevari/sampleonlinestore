
import './App.css';
//import CustomButton from './components/CustomBtn';
import Navbar from './components/NavBar';
//import Card from './components/Card';
import background from "./img/background.jpg";
import CustomCard from './components/CustomCard';
//import Header from './components/Header';

function App() {
  return (
    
    <div className="App" style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      
      <Navbar/>
      
      <br/>
      <div className='parent'>
        <CustomCard title="card #1"/>
        <CustomCard title="card #2"/>
        <CustomCard title="card #3"/>
        
      </div>
     
    </div>
  );
}

export default App;
