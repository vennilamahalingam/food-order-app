
import slide1 from "../assets/minislider3.PNG";
import slide2 from "../assets/minislider2.PNG";
import slide3 from "../assets/minislider4.PNG";
import slide4 from "../assets/minislider1.PNG";
import "../styles/Aboutus.css";
import MultiSlider from "./MultiSlider.js";
import image from "../assets/backgroundAcboutus.jpg";
function Aboutus ()
{
    const sliderArray = [slide1,slide2,slide3,slide4];
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
        <div className="aboutParent" id="aboutUs">
            <div className="aboutText">
                <h1>Our Journey</h1>
                <div>
                    Mom-Made catering has established itself as one of the finest veg restaurants in Coimbatore due to its focus on quality and service. Walk into our restaurants for an all-day dining experience like no other. We offer a variety of cuisines to tease your taste buds and are especially proud of our unique offerings in South Indian dishes.
                    Mom-Made catering was started by the family of Dheenadayalan nagiah & K-Damodharswamy rangaswamy naidu brothers in Coimbatore since 1977. Later it became a separate entity to serve food with love to our family of customers. Now managed by Venkatesh Dheenadayalan.  Mom-Made catering is a emotion to many in tiruppur for morning coffee. Sambar idly .masala dosa. Vadai coffee.

                    We are taking party orders which we will deliver at your door step.

                            </div>
            </div>
            <div className="multiSlider">
                 <MultiSlider sliderArray = {sliderArray} responsive = {responsive}/>
            </div>
        </div>
         
         </>
    )
}

export default Aboutus;