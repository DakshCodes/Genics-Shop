import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Productcard from '../../components/ProductsCard/Productcard'
import { useAuth } from '../../context/auth';

const AllProducts = () => {

  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useAuth();

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/product/get-product`);
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
    <div className=''>
      <div className='w-full mt-10 flex justify-center items-center'>
        <h1 className=' text-[#fff] font-mono !text-center flex justify-center items-center text-5xl'>Products</h1>
      </div>
      <div className="p-20 flex gap-10 flex-wrap">
        {
          products.length > 0 ? (
            products?.map((p) => (
              p.userid === auth?.user?._id &&
              <Productcard link={`/dashboard/admin/product/${p?.slug}`} key={p._id} p={p} />
            ))
          ) : (
            <h1 className=' text-[#fff] h-[20vmax]   m-auto font-mono !text-center flex justify-center items-center text-2xl'> 0 Products</h1>
          )
        }

      </div>
    </div>
  )
}

export default AllProducts
