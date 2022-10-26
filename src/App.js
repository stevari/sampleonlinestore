
import './App.css';
import CustomButton from './components/CustomBtn';
import Navbar from './components/NavBar';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <h1>Sample Online Store.</h1>
      <h3>made by Ville Vartia</h3>
      <CustomButton txt = "proceed"/>
      
    </div>
  );
}

export default App;
