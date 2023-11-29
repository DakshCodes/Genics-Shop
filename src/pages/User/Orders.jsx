import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { useLoading } from "../../context/Loading";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useLoading();

    const getOrders = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/auth/orders`);
            setOrders(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);

    return (
        <div>
            <div className=" w-full h-full flex-grow ">
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden !bg-white">
                                <h1 className="text-center">All Orders</h1>
                                {orders?.map((o, i) => {
                                    return (
                                        <div className="border shadow">
                                            <table className="min-w-full divide-y bg-white table-fixed dark:divide-gray-700">
                                                <thead className="bg-white dark:bg-gray-700">
                                                    <tr>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            #
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Status
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Buyer
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            date
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Payment
                                                        </th>
                                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                            Quantity
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{i + 1}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{o?.status}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{o?.buyer?.name}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{moment(o?.createAt).fromNow()}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{o?.payment.success ? "Success" : "Failed"}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{o?.products?.length}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="container">
                                                {o?.products?.map((p, i) => (
                                                    <div className="row mb-2 p-3 card flex-row" key={p._id}>
                                                        <div className="col-md-4">
                                                            <img
                                                                src={`/api/v1/product/product-photo/${p._id}`}
                                                                className="card-img-top"
                                                                alt={p.name}
                                                                width="100px"
                                                                height={"100px"}
                                                            />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>{p.name}</p>
                                                            <p>{p.description.substring(0, 30)}</p>
                                                            <p>Price : {p.price}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Orders;