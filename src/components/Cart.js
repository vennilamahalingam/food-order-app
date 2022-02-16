import empty from "../assets/emptycart.PNG";
import "../styles/Cart.css";
import veg from "../assets/veg.PNG";



function Cart({cartItems, setCartItems})
{
   

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

    function removeItem(menu)
    {
        setCartItems( prevCartItems => 
            {
                    let cost = Number(prevCartItems.totalCost) - Number(menu.price);
                    const newResources = prevCartItems.cartArr.map((resource,index) => {
                        const newObject = Object.assign({}, resource)
                        if (resource.id === menu.id) 
                        {
                            newObject.quantity = Number(newObject.quantity) - 1;     
                            
                        }
                        return newObject;
                     }).filter((item) => item.quantity != 0);    
                     
                     return ({cartArr: newResources, totalCost: cost} );
                    
            }
            );
    }
    function placeOrder()
    {
        let message = "";
        cartItems.cartArr.forEach((data)=>{
            message = message + data.name +" " + data.quantity + "\n"
        });
        message = message + "total :" + cartItems.totalCost;
        window.location.href = `mailto:"dayalprasad19@gmail.com"?Subject="Order for the day"&body=${message}`
    }
return(
    <>
        <div className="cartParent">
            <div className="cartTitle">
                Cart
            </div>
            <div className="cartBody">
                {cartItems.cartArr.length == 0 ? 
                <>
                    <div className="status">
                        Empty
                    </div>
                    <img src={empty}/>
                    <div className="emptyMsg">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
            
                </>   
                :
                <>
               {cartItems.cartArr.map((menu)=>
                    <div className="itemEntry">
                        <img src={veg}/>
                        <div className="name">{menu.name}</div>
                        <div className="quantityCounter">
                            <div className="remove" onClick={()=>removeItem(menu)}>-</div>
                            <div className="quantity">{menu.quantity}</div>
                            <div className="addItem" onClick={()=>addItem(menu)}>+</div>
                        </div>
                        <div className="price">{menu.price}</div>
                    </div>
                )
                }
                <div className="subTotalBody">
                    <div className="subtotalTxt">
                        <div className="subtotal">Subtotal</div>
                        <div className="subtotalsubTxt">Extra charges may apply</div>
                    </div>
                    <div className="subtotalCost">{cartItems.totalCost}</div>
                </div>
                <div className="orderbutton" onClick={placeOrder}>Place an order</div>
                </>
            }
             </div>
             </div>
    </>
)
}
export default Cart;
