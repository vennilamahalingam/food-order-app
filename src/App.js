
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Catering from "./components/Catering.js";
function App() {
  return (
        <div className="App">
            <Router>
              <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/Catering" element={<Catering/>}/>
              </Routes>
            </Router>
            <Footer/>
        </div>
    
    
  );
}

export default App;
