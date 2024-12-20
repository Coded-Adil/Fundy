import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const DonationDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [clothes, setClothes] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
    }

    useEffect(() => {
        const singleData = data.find(clothes => clothes.id == id);
        setClothes(singleData);
    }, [data, id]);

    const { title, image, description, status, contactInfo, division } = clothes || {}

    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="card card-side md:col-span-2 flex flex-col my-10 bg-base-100 border-2 rounded-md shadow-xl">
                <figure className="p-10">
                    <img
                        className="rounded-xl object-cover"
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body p-10">
                    <h2 className="card-title mx-auto text-3xl font-bold">{title}</h2>
                    <p className="text-center text-xl text-gray-600">{description}</p>
                    <div className="flex gap-2">
                        <h4 className="badge bg-green-300">{division}</h4>
                        <h4 className="badge bg-green-300">{status}</h4>
                    </div>
                    <h2 className="text-md text-gray-600">Operating in: {division}</h2>
                    <h2 className="text-md text-gray-600">Contact Us: {contactInfo}</h2>
                </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-md border-2 my-10 shadow-xl">
                <form className="card-body" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center">Donate Now</h1>
                <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="quantity">
                            Quantity of Items
                        </label>
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            placeholder="e.g., 2 jackets, 3 blankets"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="itemType">
                            Item Type
                        </label>
                        <select
                            id="itemType"
                            name="itemType"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        >
                            <option value="">Select Item Type</option>
                            <option value="blanket">Blanket</option>
                            <option value="jacket">Jacket</option>
                            <option value="sweater">Sweater</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="pickupLocation">
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="notes">
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            placeholder="Any additional details"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        ></textarea>
                    </div>
                    <div className="flex form-control mt-6 justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default DonationDetails;