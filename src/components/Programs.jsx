import 'animate.css';
const Programs = () => {
    return (
        <div className="container mx-auto space-y-8 my-8">
            <div className="mx-auto my-5 px-24 space-y-5">
                <h1 className="text-3xl font-bold text-center text-white">Our Programs</h1>
                <p className="text-xl text-gray-600 text-center  text-white">Explore our impactful programs designed to bring comfort and hope to those in need. From distributing winter clothing to organizing community drives, every initiative is a step toward a warmer, kinder world.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-around items-center">
                <div
                    className="animate__animated animate__flipInX animate__delay-2s rounded-xl relative max-h-60 max-w-60 overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <img
                        src="https://i.ibb.co.com/HYLH3NV/pexels-arina-krasnikova-5710033.jpg"
                        className="max-w-60 h-60" />
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black opacity-50">
                        <div className="flex h-full flex-col items-center justify-center">
                            <h1 className="text-white text-lg font-semibold opacity-100">Winter Clothing Drive</h1>
                            <p className="text-white text-sm text-center px-2 opacity-100">Collect and distribute warm clothes to underprivileged communities to help them survive the harsh winter.</p>
                        </div>
                    </div>
                </div>
                <div
                    className="animate__animated animate__flipInX animate__delay-2s rounded-xl relative max-w-60 max-h-60 overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <img
                        src="https://i.ibb.co.com/MhBzZn2/pexels-fotios-photos-1902830.jpg"
                        className="max-w-60 h-60" />
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black opacity-50">
                        <div className="flex h-full flex-col items-center justify-center">
                            <h1 className="text-white text-lg font-semibold opacity-100">Blanket Donation</h1>
                            <p className="text-white text-sm px-2 text-center opacity-100">Provide blankets to families in need, ensuring they stay cozy and protected during the cold nights.</p>
                        </div>
                    </div>
                </div>
                <div
                    className="animate__animated animate__flipInX animate__delay-2s rounded-xl relative max-w-60 max-h-60 overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <img
                        src="https://i.ibb.co.com/tQgc8fY/pexels-lagosfoodbank-8061642.jpg"
                        className="max-w-60 h-60" />
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black opacity-50">
                        <div className="flex h-full flex-col items-center justify-center">
                            <h1 className="text-white text-lg font-semibold opacity-100">Community Outreach</h1>
                            <p className="text-white text-sm text-center px-2 opacity-100">Organize local events to raise awareness and directly deliver aid to those in remote or underserved areas.</p>
                        </div>
                    </div>
                </div>
                <div
                    className="animate__animated animate__flipInX animate__delay-2s rounded-xl relative max-w-60 max-h-60 overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <img
                        src="https://i.ibb.co.com/KyDfJvB/donation-food.jpg"
                        className="max-w-60 h-60" />
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black opacity-50">
                        <div className="flex h-full flex-col items-center justify-center">
                            <h1 className="text-white text-lg font-semibold opacity-100">Warm Meals Initiative</h1>
                            <p className="px-2 text-white text-sm text-center opacity-100">Serve hot, nourishing meals to the homeless and those affected by the winter chill.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;