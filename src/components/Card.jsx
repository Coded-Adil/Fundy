import 'animate.css';
import { Link } from 'react-router-dom';

const Card = ({ donate }) => {
    const { id, division, image, title, description, status } = donate || {}
    return (
        <div className="card bg-base-100 border-2 shadow-xl animate__animated animate__zoomInDown">
            <figure>
                <img
                    className="w-full max-h-60"
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body space-y-4">
                <div className="flex gap-2">
                    <h4 className="badge bg-green-300">{division}</h4>
                    <h4 className="badge bg-green-300">{status}</h4>
                </div>
                <h2 className="card-title mx-auto font-bold">{title}</h2>
                <p className=" text-center">{description}</p>
                <div className="card-actions w-full justify-center">
                    <Link
                        to={`/donate/${id}`} className="w-full btn btn-outline btn-accent hover:text-white">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;