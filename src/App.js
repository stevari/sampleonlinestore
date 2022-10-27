
import './App.css';
//import CustomButton from './components/CustomBtn';
import Navbar from './components/NavBar';
import Card from './components/Card';
import background from "./img/background.jpg";
function App() {
  return (
    
    <div className="App" style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar/>
      <h1>Sample Online Store</h1>
      <h3>made by Ville Vartia</h3>
      <div>
        <br/>
      <Card 
        className="Card"
        title="Image 1 shown here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <br/>
        <Card 
        className="Card"
        title="Image 2 shown here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <br/>
        <Card 
        className="Card"
        title="Image 3 shown here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        
      </div>
     
    </div>
  );
}

export default App;
