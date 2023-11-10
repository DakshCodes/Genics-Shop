import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Productcard from '../../components/ProductsCard/Productcard'

const AllProducts = () => {

  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };
  

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);



  return (
    <div>
      <div className='w-[80rem] flex justify-center items-center'>
        <h1 className=' text-[#000] flex justify-center items-center text-5xl'>Products</h1>
      </div>
      <div className="p-20 flex flex-wrap">
        {products?.map((p) => (
          <Productcard link={`/dashboard/admin/product/${p?.slug}`} key={p._id} p={p} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts
