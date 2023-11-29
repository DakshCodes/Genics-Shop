import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

export default function Private() {

  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
 console.log('hello')
 
 useEffect(() => {
    // console.log('hello2')
    const authCheck = async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/auth/user-auth`);
      console.log('hello3')
      console.log(res.data)
      if (res.data.ok) {
        setOk(true);
      } else {
        toast.error("Please Login First")
        setOk(false);
        navigate('/login')
      }
    };
    if (auth?.token) {
      authCheck();
    }
    else{
    toast.error("Please Login First")
      navigate('/login')
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}