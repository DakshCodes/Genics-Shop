import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import axios from 'axios'
import { useAuth } from '../context/auth'
import { useLoading } from '../context/Loading';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const [loading, setLoading] = useLoading()

    const navigate = useNavigate();


    const handleregister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_SERVER}/api/v1/auth/register`, {
                name,
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    useEffect(() => {
        setLoading(true)
        if (auth?.token) {
            navigate('/')
            toast.success("Already Login")
        }
        setLoading(false)
    })

    return (
        <>
            <div className="register-main">
                <div className="register-content">
                    <form class="form" onSubmit={handleregister}>
                        <p className='para'>
                            Welcome
                        </p>
                        <div class="flex-column">
                            <label>Name</label></div>
                        <div class="inputForm">
                            <i class="ri-user-line"></i>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your Name" class="input" type="text" />
                        </div>
                        <div class="flex-column">
                            <label>Email </label></div>
                        <div class="inputForm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20"><g data-name="Layer 3" id="Layer_3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email" class="input" type="text" />
                        </div>

                        <div class="flex-column">
                            <label>Password </label></div>
                        <div class="inputForm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Password" class="input" type="password" />
                        </div>
                        <button type="submit" class="button-submit">Join us</button>
                        <p class="p">have an account? <Link to={'/login'}><span class="span">Log In</span></Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
