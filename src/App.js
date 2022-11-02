
import './App.css';
import background from "./img/background.jpg";
import Header from './components/Header';
import Body from './components/Body';


function App() {
  return (
    
    <div className="App" style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',margin:-10 }}>
      
      <Header/>
      
      
      <Body/>
     
    </div>
  );
}

export default App;
