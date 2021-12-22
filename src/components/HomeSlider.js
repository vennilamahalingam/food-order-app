import Slider from "./Slider";
import slide1 from "../assets/slider3.jpg";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider4.jpg";
import slide4 from "../assets/slider5.jpg";

function HomeSlider ()
{
    const sliderArray = [slide1,slide2,slide3,slide4];
    return (
        <Slider sliderArray = {sliderArray}/>
    )
}

export default HomeSlider;