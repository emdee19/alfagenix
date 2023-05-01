import { PropTypes } from "prop-types"

export const Card = ({image, title, description, alt, btn}) => {
    return (
        <>
            <div className="card text-center">
                <img src={image} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text body-text">{description}</p>
                    <a href="#" className="btn btn-outline-primary btn-w-250 p-2">
                        {btn}
                    </a>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,   
    description: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired
  }