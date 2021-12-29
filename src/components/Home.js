import Navbar from './Navbar';
import HomeSlider from './HomeSlider';
import Aboutus from './Aboutus';
import SignatureDishes from './SignatureDishes';
import Counter from './Counter.js';
import Doorstep from './Doorstep';

function Home()
{
    return(
        <>
        <Navbar/>
        <HomeSlider/>
        <Aboutus/>
        <SignatureDishes/>
        <Counter/>
        <Doorstep/>
        </>
        
    )
}
export default Home;