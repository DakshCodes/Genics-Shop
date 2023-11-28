import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const AdminProfile = () => {
    //context
    const [auth, setAuth] = useAuth();
    //state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //get user data
    useEffect(() => {
        const { email, name } = auth?.user;
        setName(name);
        setEmail(email);
    }, [auth?.user]);

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_SERVER}/api/v1/auth/profile`, {
                name,
                email,
                password,
            });
            if (data?.errro) {
                toast.error(data?.error);
            } else {
                setAuth({ ...auth, user: data?.updatedUser });
                let ls = localStorage.getItem("auth");
                ls = JSON.parse(ls);
                ls.user = data.updatedUser;
                localStorage.setItem("auth", JSON.stringify(ls));
                toast.success("Profile Updated Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        // <Layout title={"Your Profile"}>
        //   <div className="container-fluid m-3 p-3 dashboard">
        //     <div className="row">
        //       <div className="col-md-3">
        //         <UserMenu />
        //       </div>
        //       <div className="col-md-8">
        //         <div className="form-container" style={{ marginTop: "-40px" }}>
        //           <form onSubmit={handleSubmit}>
        //             <h4 className="title">USER PROFILE</h4>
        //             <div className="mb-3">
        //               <input
        //                 type="text"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)}
        //                 className="form-control"
        //                 id="exampleInputEmail1"
        //                 placeholder="Enter Your Name"
        //                 autoFocus
        //               />
        //             </div>
        //             <div className="mb-3">
        //               <input
        //                 type="email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 className="form-control"
        //                 id="exampleInputEmail1"
        //                 placeholder="Enter Your Email "
        //                 disabled
        //               />
        //             </div>
        //             <div className="mb-3">
        //               <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 className="form-control"
        //                 id="exampleInputPassword1"
        //                 placeholder="Enter Your Password"
        //               />
        //             </div>
        //             <button type="submit" className="btn btn-primary">
        //               UPDATE
        //             </button>
        //           </form>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </Layout>
        <div className='w-full  h-full flex-grow m-auto'>
            <div className="h-full w-full  bg-[#fff] flex flex-col justify-start sm:py-12">
                <div className="relative  sm:max-w-xl sm:mx-auto">
                    <div className="relative  bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="w-full pl-2 font-semibold text-2xl text-center  text-gray-700">
                                    <h2 className="leading-relaxed">Profile</h2>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="text-sm px-1 py-1">Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control border bg-black text-[#fff] rounded-xl p-2"
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your Name"
                                            autoFocus />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm px-1 py-1">Name</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control border bg-black text-[#fff] rounded-xl p-2"
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your Email "
                                            disabled
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-sm px-1 py-1">Name</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control border bg-black text-[#fff] rounded-xl p-2"
                                            id="exampleInputPassword1"
                                            placeholder="Enter Your Password"
                                        />
                                    </div>
                                    <div className="pt-4 flex items-center space-x-4 justify-center">
                                        <button onClick={handleSubmit} className="inline-flex bg-[#fff] text-[#000] cursor-pointer items-center gap-1 rounded border border-[#000]  px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 ">
                                            Update Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminProfile;