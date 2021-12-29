import slide1 from "../assets/sign1.PNG";
import slide2 from "../assets/sign2.jpg";
import slide3 from "../assets/sign3.jpg";
import slide4 from "../assets/sign4.jpg";
import slide5 from "../assets/sign5.jpg";
import slide6 from "../assets/sign6.jpg";
import MultiSlider from "./MultiSlider";
import "../styles/Signaturedishes.css";

function SignatureDishes()
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    const sliderArray = [slide1, slide2, slide3,slide4, slide5,slide6];
        return (
            <div className="signatureDishes" id="signatureDishes">
                <div className="dishTitle">
                    Tradition & Passion
                </div>
                <div className="subDishTitle">SIGNATURE DISHES</div>
                    <div className="dishGallery">
                        <MultiSlider sliderArray = {sliderArray} responsive={responsive}/>
                        </div>
            </div>
        
        );
        
}
export default SignatureDishes;