import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cart';

const Card = ({ p, link }) => {
    const [cart, setCart] = useCart();


 
    //detele item
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem("cart", JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <li className="flex py-6 px-2 bg-white shadow-xl">
            <div className="h-36 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
            </div>
            <div className="ml-8 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{p?.name}</a>
                        </h3>
                        <p className="ml-4">${p?.price}</p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeCartItem(p?._id)}
                        >Remove</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card
