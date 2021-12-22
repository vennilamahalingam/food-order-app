
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import HomeSlider from './components/HomeSlider';
import Aboutus from './components/Aboutus';
import SignatureDishes from './components/SignatureDishes';
import Counter from './components/Counter.js';
import Doorstep from './components/Doorstep';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
            <HomeSlider/>
            <Aboutus/>
            <SignatureDishes/>
            <Counter/>
            <Doorstep/> 
            <Footer/>
        </div>
    </Router>
    
  );
}

export default App;
