import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

export default function Private() {

  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();



  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/auth/user-auth`);
      if (res.data.ok) {
        setOk(true);
      } else {
        toast.error("Please Login First")
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}