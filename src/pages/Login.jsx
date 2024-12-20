import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster } from "react-hot-toast";

const Login = () => {

    const { userLogin, setUser, handleSignInGoogle, handleForgetPassword } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/";
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            })
    }

    const forgetPassword = () => {
        const email = emailRef.current.value;
        handleForgetPassword(email);
        window.open("https://mail.google.com/mail/u/0/#inbox")
    }
    const handleGoogle = () => {
        handleSignInGoogle()
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
                navigate(from)
            })
            .catch(error => {
                console.log('Error: ', error);
                setUser(null);
            })
    }

    return (
        <div className="min-h-screen flex justify-center p-5 items-center  bg-blue-300">
            <div className="card bg-base-100 w-full rounded-md max-w-sm shrink-0 p-5 border-2 shadow-2xl">
                <h1 className="text-2xl font-semibold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <p className="text-red-600 text-sm">
                                    {error.login}
                                </p>
                            )
                        }
                        <label onClick={forgetPassword} className="label">
                            <button to="www.gmail.com" rel="noreferrer" target="_blank" className="label-text-alt link link-hover">Forgot password?</button>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-200">Login</button>
                    </div>
                    <button onClick={handleGoogle} className="btn rounded-full mx-auto text-3xl font-bold bg-blue-200">G</button>
                </form>
                <p className="font-semibold text-center">Don't have an Account? <Link className="text-red-500" to='/auth/register'>Register</Link></p>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default Login;