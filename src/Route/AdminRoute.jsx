import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/auth";

export default function AdminRoute() {

    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/auth/admin-auth`);
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };

        if (auth?.token) {
            authCheck();
        }
        else {
            toast.error("Please Login First")
            navigate('/login')
        }
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}