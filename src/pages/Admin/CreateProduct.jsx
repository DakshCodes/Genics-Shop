import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useLoading } from "../../context/Loading";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useLoading();

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
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("userid", auth?.user?._id);

      setLoading(true)
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/v1/product/create-product`,
        productData
      );
      console.log(res.data)
      if (res.data?.success) {
        toast.success("Product Created Successfully");
        navigate('/')
      } else {
        toast.error(data?.message);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
      setLoading(false)
    }
  };


  return (<>
    <div className='w-full h-full m-auto '>
      <div className="bg-[#fff]  flex flex-col justify-start sm:py-2">
        <div className="relative w-full h-full overflow-y-auto  sm:max-w-xl sm:mx-auto">
          <div className="relative  bg-white  mx-8 py-10 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Create Product</h2>
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
                      {photo && (
                        <div className="text-center">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt="product_photo"
                            height={"200px"}
                            className="img img-responsive"
                          />
                        </div>
                      )}
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
                        >
                          <Option value="0">No</Option>
                          <Option value="1">Yes</Option>
                        </Select>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button onClick={handleCreate} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
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

export default CreateProduct
