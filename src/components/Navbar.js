import { useState } from "react";
import {Link} from "react-router-dom";
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
                <Link to="./aboutus">About us</Link>
                <Link to="./dishes">Signature dishes</Link>
                <Link to="./catering">Catering</Link>
                <Link to="./contactus">Contact us</Link>
            </div>
            <div className="navIconsDropDown" style={{display : showIcon ? "flex" : "none"}}>
                <Link to="/">Home</Link>
                <Link to="./aboutus">About us</Link>
                <Link to="./dishes">Signature dishes</Link>
                <Link to="./catering">Catering</Link>
                <Link to="./contactus">Contact us</Link>
            </div>
        </div>
     </div>
    
    )
};
export default Navbar;