import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const newName = e.target.name.value;
        const newPhoto = e.target.photo.value;
        const currentUser = { displayName: newName, photoURL: newPhoto }
        updateUserProfile(currentUser)
                    .then(() => {
                        setUser((prevUser)=>{
                            return {...prevUser, currentUser};
                        })
                        navigate('/dashboard')
                    })
                    .catch((err) => {
                        console.log(err);
                    })
    }

    return (
        <div className="min-h-screen flex justify-center p-5 items-center bg-blue-300">
            <div className="card bg-base-100 w-full rounded-md max-w-sm shrink-0 p-5 border-2 shadow-2xl">
                <h1 className="text-2xl font-semibold text-center">Update Profile</h1>
                <form onSubmit={handleUpdateProfile} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
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
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-200">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;