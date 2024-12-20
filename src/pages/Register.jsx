import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile, handleSignInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        console.log({ name, photo, email, password });

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain at least 6 characters, including an uppercase letter and a lowercase letter."
            );
            return;
        }

        createNewUser(email, password)
            .then(() => {
                // const user = result.user;
                // setUser(user);
                const currentUser = { displayName: name, photoURL: photo }
                updateUserProfile(currentUser)
                .then(() => {
                    setUser((prevUser)=>{
                        return {...prevUser, currentUser};
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
                console.error(error.code, errorMessage);
            });
    };

    const handleGoogleReg = () => {
        handleSignInGoogle();
        navigate("/")
    }

    return (
        <div className="min-h-screen flex justify-center p-5 items-center bg-blue-300">
            <div className="card bg-base-100 w-full rounded-md max-w-sm shrink-0 p-5 border-2 shadow-2xl">
                <h1 className="text-2xl font-semibold text-center">Register</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="photo-url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={ (showPassword)? "text" : "password"}
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <button onClick={() => {
                            setShowPassword(!showPassword)
                        }} className="btn btn-xs absolute right-2 top-12">
                            {
                                (showPassword) ? <PiEyeClosedFill /> : <FaEye />
                            }
                        </button>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-200">Register</button>
                    </div>
                    <button onClick={handleGoogleReg} className="btn rounded-full mx-auto text-3xl font-bold bg-blue-200">G</button>
                </form>
                <p className="font-semibold text-center">
                    Already have an Account?{" "}
                    <Link className="text-red-500" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default Register;
