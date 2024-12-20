import React from 'react';
import { FaDonate } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { GrDeliver } from 'react-icons/gr';
import 'animate.css';



const Oparate = () => {
    return (
        <div className='mx-auto my-5 space-y-6'>
            <h1 className="text-3xl font-bold text-center">Your Impact Journey</h1>
            <p className='text-xl text-gray-600 text-center'>Donate winter clothing at our collection points, and we’ll distribute them to those in need across Bangladesh. Together, let’s spread warmth and kindness this winter!  </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-around items-center">
                <div className='animate__animated animate__bounceIn animate__delay-2s p-2 rounded-full border-2 shadow-xl hover:bg-blue-300 hover:cursor-pointer transition duration-700 ease-in-out' onClick={() => document.getElementById('Donate').showModal()}>
                    <div className='m-8 flex flex-col gap-2 items-center'>
                        <FaDonate size={24} />
                        <p>Donate</p>
                    </div>
                </div>
                <dialog id="Donate" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Donate</h3>
                        <p className="py-4">Select the items you wish to donate, such as jackets, sweaters, or blankets.</p>
                    </div>
                </dialog>
                <div className='animate__animated animate__bounceIn animate__delay-2s p-2 rounded-full border-2 shadow-xl hover:bg-blue-300 hover:cursor-pointer transition duration-700 ease-in-out' onClick={() => document.getElementById('Drop').showModal()}>
                    <div className='m-8 flex flex-col gap-2 items-center'>
                        <GrDeliver size={24} />
                        <p>Drop Off</p>
                    </div>
                </div>
                <dialog id="Drop" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Drop Off</h3>
                        <p className="py-4">Visit one of our collection points conveniently located in your area.</p>
                    </div>
                </dialog>
                <div className='animate__animated animate__bounceIn animate__delay-2s p-2 rounded-full border-2 shadow-xl hover:bg-blue-300 hover:cursor-pointer transition duration-700 ease-in-out' onClick={() => document.getElementById('Divisions').showModal()}>
                    <div className='m-8 flex flex-col gap-2 items-center'>
                        <FaLocationDot size={24} />
                        <p>Divisions</p>
                    </div>
                </div>
                <dialog id="Divisions" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Divisions</h3>
                        <p className="py-4">We currently operate in Dhaka, Chattogram, Rajshahi, Khulna, Sylhet, Barisal, Rangpur, and Mymensingh.</p>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Oparate;