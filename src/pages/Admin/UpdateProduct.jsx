import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");
    const [photo, setPhoto] = useState("");
    const [id, setId] = useState("");

    //get single product
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(
                `${import.meta.env.VITE_SERVER}/api/v1/product/get-product/${params.slug}`
            );
            setName(data.product.name);
            setId(data.product._id);
            setDescription(data.product.description);
            setPrice(data.product.price);
            setPrice(data.product.price);
            setQuantity(data.product.quantity);
            setShipping(data.product.shipping);
            setCategory(data.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getSingleProduct();
        //eslint-disable-next-line
    }, []);
    //get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/category/get-category`);
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something wwent wrong in getting catgeory");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    //create product function
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantity);
            photo && productData.append("photo", photo);
            productData.append("category", category);
            const { data } = axios.put(
                `${import.meta.env.VITE_SERVER}/api/v1/product/update-product/${id}`,
                productData
            );
            if (data?.success) {
                toast.error(data?.message);
            } else {
                toast.success("Product Updated Successfully");
                navigate("/dashboard/admin/products");
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
        }
    };

    //delete a product
    const handleDelete = async () => {
        try {
            let answer = window.prompt(" want to delete this product ? ");
            if (!answer) return;
            const { data } = await axios.delete(
                `${import.meta.env.VITE_SERVER}/api/v1/product/delete-product/${id}`
            );
            toast.success("Product Deleted SuccessFully");
            navigate("/dashboard/admin/products");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (<>
        <div className='w-[70rem] h-[55rem] '>
            <div className=" w-full h-full  bg-gray-100  flex flex-col justify-start sm:py-2">
                <div className="relative w-full h-full overflow-y-auto  sm:max-w-xl sm:mx-auto">
                    <div className="relative  bg-white  mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Update Product</h2>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <Select
                                            bordered={false}
                                            placeholder="Select a category"
                                            size="large"
                                            showSearch
                                            className="form-select mb-3"
                                            onChange={(value) => {
                                                setCategory(value);
                                            }}
                                            value={category}
                                        >
                                            {categories?.map((c) => (
                                                <Option key={c._id} value={c._id}>
                                                    {c.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="mb-3">
                                            <label className="btn btn-outline-secondary col-md-12">
                                                {photo ? photo.name : "Upload Photo"}
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    accept="image/*"
                                                    onChange={(e) => setPhoto(e.target.files[0])}
                                                    hidden
                                                />
                                            </label>
                                        </div>
                                        <div className="mb-3">
                                            {photo ? (
                                                <div className="text-center">
                                                    <img
                                                        src={URL.createObjectURL(photo)}
                                                        alt="product_photo"
                                                        height={"200px"}
                                                        className="img img-responsive"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <img
                                                        src={`http://localhost:8080/api/v1/product/product-photo/${id}`}
                                                        alt="product_photo"
                                                        height={"200px"}
                                                        className="img img-responsive"
                                                    />
                                                </div>
                                            )

                                            }
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Product Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Enter category name" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Description</label>
                                            <textarea
                                                type="text"
                                                value={description}
                                                placeholder="write a description"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Price</label>
                                            <input
                                                type="number"
                                                value={price}
                                                placeholder="write a quantity"
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Quntity</label>
                                            <input
                                                type="number"
                                                value={quantity}
                                                placeholder="write a quantity"
                                                onChange={(e) => setQuantity(e.target.value)}
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex flex-col">
                                            <div className="mb-3">
                                                <Select
                                                    bordered={false}
                                                    placeholder="Select Shipping "
                                                    size="large"
                                                    showSearch
                                                    className="form-select mb-3"
                                                    onChange={(value) => {
                                                        setShipping(value);
                                                    }}
                                                    value={shipping ? "yes" : "No"}
                                                >
                                                    <Option value="0">No</Option>
                                                    <Option value="1">Yes</Option>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button onClick={handleUpdate} class="relative overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-6 font-semibold rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12">
                                        <span class="absolute top-0 left-0 w-full h-full bg-blue-300"></span>
                                        <span class="relative z-10 uppercase">Update</span>
                                    </button>

                                    <button onClick={handleDelete} class="relative overflow-hidden bg-gradient-to-r from-red-400 to-red-500 text-white py-2 px-6 font-semibold rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12">
                                        <span class="absolute top-0 left-0 w-full h-full bg-red-300"></span>
                                        <span class="relative z-10 uppercase">Delete</span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default UpdateProduct
