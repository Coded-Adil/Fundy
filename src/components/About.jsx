import { motion } from "motion/react"

const About = () => {
    return (
        <div>
            <div className="mx-auto my-5 px-24 space-y-5">
                <h1 className="text-3xl font-bold text-center">About Us</h1>
                <p className="text-xl text-gray-600 text-center">KindWarm connects caring individuals to those in need, providing warmth through donated winter clothing. Join us in spreading kindness and comfort during the coldest months. Together, we can make a difference!</p>
            </div>
            <div className="grid grid-cols-3 my-8">
                <motion.div className=""
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 1.2 }
                    }}
                >
                    <img className="object-cover" src="https://i.ibb.co.com/PhCvLLg/pexels-newmanphotographs-14831647.jpg" />
                </motion.div>
                <motion.div className="row-span-2"
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 1.2 }
                    }}
                >
                    <img className="h-full w-full object-cover" src="https://i.ibb.co.com/YTS6DDF/pexels-julia-m-cameron-6995066.jpg" />
                </motion.div>
                <motion.div className=""
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 1.2 }
                    }}
                >
                    <img className="object-cover" src="https://i.ibb.co.com/0jyst0t/pexels-hanawasthere-4394471-5887647.jpg" />
                </motion.div>
                <motion.div className=""
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 1.2 }
                    }}
                >
                    <img className="object-cover" src="https://i.ibb.co.com/DYvP99p/pexels-gustavo-fring-7156186.jpg" />
                </motion.div>
                <motion.div className=""
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 1.2 }
                    }}
                >
                    <img className="object-cover" src="https://i.ibb.co.com/z5mzd8f/syed-aoun-abbas-ong-Y-O7-Yw-WE-unsplash.jpg" />
                </motion.div>
            </div>
        </div>
    );
};

export default About;