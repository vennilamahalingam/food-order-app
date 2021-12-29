import {MenuList} from "../data/MenuList";
import "../styles/Catering.css";
import Navbar from "./Navbar";
import Cart from "./Cart.js";
import { useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';
import {Link} from "react-scroll";
import veg from "../assets/veg.PNG";

function Catering()
{
    const [activeCategory, setActiveCategory] = useState("South Indian");
    const [cartItems, setCartItems] = useState({cartArr: [], totalCost: "0"});
    
    function addItem(menu)
    {
        setCartItems( (prevCartArr) => 
            {
                let isItemAdded = prevCartArr.cartArr.filter((item)=>item.id == menu.id).length;
                let cost = Number(prevCartArr.totalCost) + Number(menu.price);

                if(isItemAdded > 0)
                {
                    const newResources = prevCartArr.cartArr.map(resource => {
                    const newObject = Object.assign({}, resource)
                
                    if (resource.id === menu.id) 
                    {
                        newObject.quantity = Number(newObject.quantity) + 1;
                        
                    }
                    return newObject;
                    })      
                     return ({cartArr: newResources, totalCost: cost} );
                }
                else
                {
                    return ({cartArr: [...prevCartArr.cartArr, menu], totalCost: cost});
                }
                
            }
            );
    }
    return(
        <>
        <Navbar/>
          <div className="menuList">
            <div className="leftPanel">
            {
                 MenuList.map((arr,index)=>
                 <Link offset={-100} to={index + "category"} spy={true} smooth={true}>
                    <div className="category" category={activeCategory} style={activeCategory === arr.category? {color:'#3c3cbc',    borderRight: "5px solid"} : {color:'#000'}} onClick={()=>setActiveCategory(arr.category)}>{arr.category}
                    </div>
                 </Link>
                 )

            }
            </div>
           
                <div className="rightPanel">
                    {MenuList.map((arr, index)=>
                        (
                                <div className="menu" category={arr.category}>
                                        <VisibilitySensor key={arr.category} onChange={()=>setActiveCategory(arr.category)} delayedCall>
                                            
                                                <div id={index + "category"} className="category" >{arr.category}</div>
                                            
                                        </VisibilitySensor>
                                        {arr.menu.map((menu)=>
                                                <div className="itemParent">
                                                    <div className="item">
                                                    <img src={veg}/>
                                                    <div className="name">{menu.name}</div>
                                                    <div className="price"> {menu.price}</div>
                                                    </div>
                                                    <div className="add" onClick={()=>addItem(menu)}>Add</div>
                                                </div>
                                        
                                        )}
                                    
                                </div>
                            )
                        )}
                    
                    </div>
               <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        </div>

        </>
  
    )
}
export default Catering;