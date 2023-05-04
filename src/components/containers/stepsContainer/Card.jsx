import { PropTypes } from "prop-types"

export const Card = ({image, title, description, alt, btn}) => {
    return (
        <>
            <div className="card text-center mx-auto mt-5">
                <img src={image} className="card-img-top img-fluid" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title heading-text fs-20">{title}</h5>
                    <p className="card-text body-text pt-1">{description}</p>
                    <a href="#" className="btn btn-outline-primary btn-w-250 p-2 mt-3">
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