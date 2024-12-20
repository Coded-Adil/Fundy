import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import 'animate.css';


const Donate = () => {
    const data = useLoaderData();
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        setClothes(data);
    }, [data])

    return (
        <div className="contaier mx-auto my-10 space-y-8">
            <div className="animate__animated animate__slideInDown space-y-8">
                <h1 className="text-4xl font-bold text-center">Share the Warmth: Make a Difference Today</h1>
                <h4 className="text-2xl font-semibold text-center">{clothes.length} Campaigns Are Currently <span className="text-green-600">Active</span></h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 my-12">
                {
                    clothes.map(donate => <Card key={donate.id} donate={donate} />)
                }
            </div>
        </div>
    );
};

export default Donate;