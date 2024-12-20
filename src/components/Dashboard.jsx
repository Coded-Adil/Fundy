import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log("User: ", user?.photoURL);
    console.log(user)
    return (
        <div className="min-h-screen flex justify-center p-5 items-center  bg-blue-300">
            <div className="bg-base-100 w-full space-y-8 rounded-md max-w-sm shrink-0 p-5 border-2 shadow-2xl">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold text-center">Welcome {user?.displayName} </h1>
                    <img className="w-40 max-h-40 p-2 rounded-full border-2" src={user?.photoURL} />
                </div>
                <div className="flex flex-col justify-start gap-4">
                    <div className="flex gap-4 items-center">
                        <div className="border-2 p-2 rounded-full">
                            <FaRegUser color="#1fc8fa" size={20} />
                        </div>
                        <h2 className="text-md font-bold">Name: </h2>
                        <h2 className="text-md font-bold">{user.displayName}</h2>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="border-2 p-2 rounded-full">
                            <MdEmail color="#0aa128" size={20} />
                        </div>
                        <h2 className="text-md font-bold">Email: </h2>
                        <h2 className="text-md font-bold">{user.email}</h2>
                    </div>
                </div>
                <Link to="/update" className="btn btn-outline btn-accent rounded-full">Update Profile</Link>
            </div>
        </div>
    );
};

export default Dashboard;