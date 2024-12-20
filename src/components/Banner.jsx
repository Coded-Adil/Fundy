import "../styles/banner.css"
import { motion } from "motion/react"
import 'animate.css';

const Banner = () => {
    return (
        <div className="md:flex banner-bg rounded-md">
            <div className="w-full py-5 md:p-0 md:my-auto max-h-96 md:w-2/4">
                <div
                    className="flex flex-col m-5 md:mx-10 space-y-6 md:p-10 rounded-xl text-white justify-center items-center border-2 bg-gray-700 opacity-85 animate__animated animate__bounceIn"
                >
                    <h1 className="text-3xl font-bold">Welcome To Kind Warm</h1>
                    <p className="text-xl font-semibold text-center">
                        Spread Warmth, Share Kindness
                        <br />
                        Together, We Can Fight the Cold!
                    </p>
                </div>
            </div>
            <div className="carousel max-h-96 w-full md:w-2/4 rounded-br-md rounded-tr-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/qg1T87y/dan-gold-a-JN-jj-FLy-CU-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❮</a>
                        <a href="#slide2" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/f1XQrbk/kelly-sikkema-CNjfgzo-Y8-JU-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❮</a>
                        <a href="#slide3" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/ryvhz0K/katie-gerrard-SOp82c-ZMXZg-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❮</a>
                        <a href="#slide4" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/QnGJByL/anna-evans-694-K2-Ahs-FLA-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❮</a>
                        <a href="#slide1" className="btn rounded-none bg-gray-400 text-white border-2 border-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;