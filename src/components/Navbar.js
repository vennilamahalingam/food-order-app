import { useState } from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "../styles/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(params) {
    const toggleNavbar = () => {
        setShowIcon(!showIcon);
    }
    const [showIcon, setShowIcon] = useState(false);
   return( 
    <div className="navbar">
        <div className="leftIcon">
            <Link to="/">
            Mom-Made catering service
            </Link>
        </div>
        <div className="rightIcons">
            <div className="orderbtn">
                <Link to="./catering">Order now</Link>
            </div>
            <div onClick={toggleNavbar} className="menuIcon">
                <ReorderIcon/>
            </div>
            <div className="navIcons">
                <Link to="/">Home</Link>
                <ScrollLink to="aboutUs" spy={true} smooth={true} offset={-145}><div>About us</div></ScrollLink>
                <ScrollLink to="signatureDishes" spy={true} smooth={true} offset={-145}><div>Signature dishes</div></ScrollLink>
                <Link to="./catering">Catering</Link>
                <ScrollLink to="contactUs" spy={true} smooth={true} offset={-145}><div>Contact us</div></ScrollLink>
            </div>
            <div className="navIconsDropDown" style={{display : showIcon ? "flex" : "none"}}>
                <Link to="/">Home</Link>
                <div>About us</div>
                <div>Signature dishes</div>
                <Link to="./catering">Catering</Link>
                <div>Contact us</div>
            </div>
        </div>
     </div>
    
    )
};
export default Navbar;