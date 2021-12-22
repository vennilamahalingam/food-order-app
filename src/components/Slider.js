import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Slider({sliderArray})
{
    return (
        <div className="slider">
                <Carousel autoPlay = {true} interval={1500} infiniteLoop={true} showThumbs={false}>
                    {sliderArray.map((url) => 
                         (
                            <div>
                            <img src={url}/>
                            </div>
                        )
                    )
                    }
                </Carousel>
        </div>
        
    );
}
export default Slider;