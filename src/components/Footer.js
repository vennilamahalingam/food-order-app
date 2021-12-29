import fb from "../assets/fb.PNG";
import insta from "../assets/insta.PNG";
import "../styles/Footer.css"
function Footer()
{
 return(
     <div className="footer" id="contactUs">
         <div className="socialMedia">
             <h1>Follow us </h1>
             <div>
                 <img src={fb}/>
                 <img src={insta}/>
             </div>
        </div>
        <div className="contact">
            <div>Call Us: 1234567890</div>
            <div>Mail Us: office@mommade.com</div>
        </div>
        <div className="news">
            <h1>Newsletter</h1>
            <input placeholder="Your email address..."/>
        </div>
     </div>
 );
}
export default Footer;