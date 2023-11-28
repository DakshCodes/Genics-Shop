import React, { useEffect, useState } from 'react'
import './Checkout.css'
import brifcase from '../assets/briefcase.png'
import Card from '../components/Card/Card'
import { useCart } from '../context/cart'
import DropIn from "braintree-web-drop-in-react";
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Checkout = () => {
    const [cart, setCart] = useCart();
    const [auth, setAuth] = useAuth();
    const [clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    //total price
    const totalPrice = () => {
        try {
            let total = 0;
            cart?.map((item) => {
                total = total + item.price;
            });
            return total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        } catch (error) {
            console.log(error);
        }
    };

    //get payment gateway token
    const getToken = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/product/braintree/token`);
            setClientToken(data?.clientToken);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getToken();
    }, [auth?.token]);

    //handle payments
    const handlePayment = async () => {
        try {
            const { nonce } = await instance.requestPaymentMethod();
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/product/braintree/payment`, {
                nonce,
                cart,
            });
            localStorage.removeItem("cart");
            setCart([]);
            navigate("/");
            toast.success("Payment Completed Successfully ");
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <div className='checkout-main'>
            <div className="chekout-content-1">
                <div className="checkout-1-head">
                    <img src={brifcase} alt="" />
                    <h1>Confirm & Pay</h1>
                    <p>{cart?.length} items</p>
                </div>
                <div className="checkout-1-items">

                    {
                        cart.length > 0 ? (

                            cart?.map((p) => (
                                <>
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="my-6 divide-y  divide-gray-200">
                                                <Card link={`/detail/${p?.slug}`} key={p._id} p={p} />
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ))
                        )
                            : (
                                <h1 className='w-full h-full flex justify-center items-center text-4xl'>No Item ?</h1>
                            )
                    }
                </div>
            </div>
            <div className="chekout-content-2">
                <div className="relative overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div className=" inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    <div className="inset-0 overflow-hidden">
                        <div className="relative inset-0 overflow-hidden">
                            <div className="pointer-events-none  inset-y-0  flex max-w-full pl-10">
                                <div className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-hidden bg-white shadow-xl">
                                        <div className="flex justify-center items-center flex-col gap-5 border-t border-gray-200 px-8 py-16 sm:px-6">
                                            <div className="flex justify-center text-xl font-medium text-gray-900">
                                                <p>Total : {totalPrice()}</p>
                                            </div>
                                            {auth?.token ? (
                                                <>
                                                    <button
                                                        className="border"
                                                        onClick={() => navigate("/dashboard/user/profile")}
                                                    >
                                                        Update Address
                                                    </button>
                                                </>
                                            ) : (
                                                <button
                                                    className="btn btn-outline-warning"
                                                    onClick={() =>
                                                        navigate("/login", {
                                                            state: "/checkout",
                                                        })
                                                    }
                                                >
                                                    Plase Login to checkout
                                                </button>
                                            )}
                                            <div className="mt-2 flex flex-col">
                                                {!clientToken || !auth?.token || !cart?.length ? (
                                                    ""
                                                ) : (
                                                    <>
                                                        <DropIn
                                                            options={{
                                                                authorization: clientToken,
                                                                paypal: {
                                                                    flow: "vault",
                                                                },
                                                            }}
                                                            onInstance={(instance) => setInstance(instance)}
                                                        />


                                                        <button
                                                            className="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
                                                            onClick={handlePayment}
                                                        >
                                                            Make Payment
                                                        </button>
                                                    </>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Checkout
