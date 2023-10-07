import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const ServiceCard = ({ data }) => {

    const { id, name, image, price, description } = data


    return (
        <div className='p-4 bg-white rounded-md'>
            <div className="relative">
                <img className='w-[349px] h-[217px] rounded-md' src={image} alt="" />
                <div>
                    <div className="absolute top-2 right-2 bg-[#0E21A0] px-2 py-1 rounded-md">
                        <span className="text-white font-bold">{price}</span>
                    </div>
                </div>
            </div>
            <h3 className='text-xl font-semibold mt-4'>{name}</h3>

            <div className='flex-grow'>
                <p className='mt-3 text-[#777777] text-sm'>{description.slice(0, 200)}...</p>
                <Link to={`/ServiceDetails/${id}`} className="font-bold text-blue-400">Read more</Link>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    data: PropTypes.object
  
};

export default ServiceCard;