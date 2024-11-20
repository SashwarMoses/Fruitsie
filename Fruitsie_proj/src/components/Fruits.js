import Apple from "../images/Apple.jpg";
import Banana from "../images/Banana.jpg";
import DragonFruit from "../images/Dragon-Fruit.jpeg";
import Grapes from "../images/Grapes.jpg";
import React, { useState } from "react";

function Fruits() {
    const openSidebar = () => {
        document.getElementById('sidebar').style.right = '0px'
    }
    const closeSidebar = () => {
        document.getElementById('sidebar').style.right = '-300px'
    }
    const [cart, setCart] = useState([]); // State to manage cart items
    const [total, setTotal] = useState(0); // State to manage total cost

    // Add fruit to the cart
    const addToCart = (name, price) => {
        setCart((prevCart) => [...prevCart, { name, price }]);
    };

    // Remove fruit from the cart by index
    const removeFromCart = (indexToRemove) => {
        setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
    };

    // Recalculate the total whenever the cart changes
    React.useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
        setTotal(newTotal);
    }, [cart]);

    return (
        <>
            <br /><br /><br />
            <div className="super-container">
                <div className="cart-section">
                    <div className="cart-icon">
                        <button className="open" id="open" onClick={openSidebar}>
                            <i className="fa-solid fa-cart-shopping"></i></button>
                        <span>0</span>
                    </div>
                </div>
                <br />
                <div className="fruits-container">
                    <h2 className="section-heading">Fruits</h2>
                    <div className="item-list">
                        <div className="item">
                            <img src={Apple} alt="error" />
                            <h2 className="names">Apple</h2>
                            <div className="price">&#x20B9; 145</div>
                            <button className="add" onClick={() => addToCart('Apple', 145)}><i className="fa-solid fa-plus" id="addto"></i></button>
                        </div>
                        <div className="item">
                            <img src={Banana} alt="error" />
                            <h2 className="names">Banana</h2>
                            <div className="price">&#x20B9; 145</div>
                            <button className="add" onClick={() => addToCart('Banana', 145)}><i className="fa-solid fa-plus" id="addto"></i></button>
                        </div>
                        <div className="item">
                            <img src={DragonFruit} alt="error" />
                            <h2 className="names">Dragon-Fruit</h2>
                            <div className="price">&#x20B9; 145</div>
                            <button className="add" onClick={() => addToCart('Dragon-Fruit', 145)}><i className="fa-solid fa-plus" id="addto"></i></button>
                        </div>
                        <div className="item">
                            <img src={Grapes} alt="error" />
                            <h2 className="names">Grapes</h2>
                            <div className="price">&#x20B9; 146</div>
                            <button className="add" onClick={() => addToCart('Grapes', 145)}><i className="fa-solid fa-plus" id="addto"></i></button>
                        </div>
                    </div>
                </div>
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-hide">
                        <button className="close" onClick={closeSidebar}><i className="fa-solid fa-close"></i></button>
                    </div>
                    <div className="cart-menu">
                        <h2 className="names">My cart</h2>
                        <div className="cart-items">
                            {cart.length === 0 ? (
                                <p>Cart is empty</p>
                            ) : (
                                cart.map((item, index) => (
                                    <div key={index} className="cart-item">
                                        <span>
                                            {item.name} - ₹{item.price}
                                        </span>
                                        <button className="remove-btn" onClick={() => removeFromCart(index)}>
                                            Remove
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="sidebar-foot">
                        <div className="total">
                            <h5 className="names">Total</h5>
                            <div className="cart-total">&#x20B9; {total}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fruits;