import PropTypes from 'prop-types';

const AboutCard = ({card}) => {

    const{icon, title, description} = card

    return (
        <div className="card items-center card-compact bg-base-100 rounded-none shadow-xl text-[#333333] p-5">
            <img className="w-20" src={icon} alt="" />
            <div className="card-body">
                <h2 className="card-title text-center mx-auto">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    card: PropTypes.object
  
};

export default AboutCard;