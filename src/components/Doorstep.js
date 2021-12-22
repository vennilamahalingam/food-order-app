import swiggy from "../assets/swiggy.png";
import zomato from "../assets/zomato.png";
import "../styles/Doorstep.css";

function Doorstep(){
    return(
            <div className="doorStepService">
                <div>Get Our Delicious Food Delivered At Your Doorstep With</div>
                <hr/>
                <div className="partnerCont">
                    <div className="swiggy">
                    <a href="http://www.swiggy.com">
                    <img src={swiggy}/>
                    </a>
                    
                    </div>
                    <div className="zomato">
                        <a href="http://www.zomato.com">
                        <img src={zomato}/>
                        </a>
                        
                    </div>
                </div>    
            </div>
    );
}
export default Doorstep;