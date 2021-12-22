import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MultiSlider({sliderArray,responsive})
{

return (
<Carousel responsive={responsive} 
    autoPlay={true} infinite={true} 
    customTransition="all 0.5s ease"
    transitionDuration={500}>
  {sliderArray.map((img)=><div ><img src={img}/></div>)}
</Carousel>
)
}
export default MultiSlider;