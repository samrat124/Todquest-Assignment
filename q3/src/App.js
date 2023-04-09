import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './Components/Allroutes';

function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
       <Allroutes/>
       </BrowserRouter>
    </div>
  );
}

export default App;
