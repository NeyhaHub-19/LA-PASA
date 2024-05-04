import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
import Navbar from '../../Navbar';
import Announcement from '../../Announcement';
import { Footer } from '../../Footer';
function Cart() {
    const state = useContext(GlobalState);
    const [cart, setCart] = state.userAPI.cart;
    const [token] = state.token;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, pro) => {
                return prev + (pro.price * pro.sold);
            }, 0);

            setTotal(total);
        };
        getTotal();
    }, [cart]);

    const addToCart = async (cart) => {
        await axios.patch('http://localhost:8000/api/cart', { cart }, {
            headers: { Authorization: token }
        });
    };

    const increment = (id) => {
        const updatedCart = cart.map(pro => {
            if (pro._id === id) {
                return { ...pro, sold: pro.sold + 1 };
            }
            return pro;
        });
        setCart(updatedCart);
    };
    
    const decrement = (id) => {
        const updatedCart = cart.map(pro => {
            if (pro._id === id && pro.sold > 1) {
                return { ...pro, sold: pro.sold - 1 };
            }
            return pro;
        });
        setCart(updatedCart);
    };

    const removeFromCart = (id) => {
        if (window.confirm("Do you want to delete product from the cart?")) {
            const updatedCart = cart.filter(pro => pro._id !== id);
            setCart(updatedCart);
            addToCart(updatedCart); // Assuming addToCart function also updates the cart on the server
        }
    };
    

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>;
    }

    return (
        <>
        <Announcement/>
        <Navbar/>
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                         {product.image && product.image.url && (
                <img src={product.image.url} alt="" />
            )}
                        <div className="box-detail">
                            <h2>{product.title}</h2>
                            <h3> Rs.{product.price * product.sold}</h3>
                            <p>{product.desc}</p>
                            <p>Sold: {product.sold}</p>
                            <div className='amount'>
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.sold}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>

                            <div className='delete' onClick={() => removeFromCart(product._id)}>X</div>
                        </div>
                    </div>
                ))
            }

            <div className='total'>
                <h3>Total: ${total}</h3>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Cart;