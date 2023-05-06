import { useState } from "react";
import "./personalized.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
    personalized_image1,
    personalized_image2,
    faride_image,
    ghods_image,
} from "./index";

const images = [
    { personalized_image1 },
    { personalized_image2 }
];
const cards = [
    {
        heading: "Sexual Health",
        subheading: "Male & Female",
        description:
            "The Hormone Trio provides a baseline assessment of estradiol, progesterone and testosterone.",
    },
    {
        heading: "Hormone Replacement",
        subheading: "Male & Female",
        description:
            "The Hormone Trio provides a baseline assessment of estradiol, progesterone and testosterone.",
    },
];

export const Personalized = () => {
    const [position, setPosition] = useState(0);

    const handleLeftArrowClick = () => {
        setPosition((prevPosition) =>
            prevPosition === 0 ? images.length - 1 : prevPosition - 1
        );
    };

    const handleRightArrowClick = () => {
        setPosition((prevPosition) =>
            prevPosition === images.length - 1 ? 0 : prevPosition + 1
        );
    };

    return (
        <>
            <section className="personalized-section">
                <div className="container">
                    <p className="heading-text">Choose Your Personalized Test Kit</p>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 pt-30">
                            <div className="image-side d-none d-lg-block">
                                <img src={images[position]} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 my-auto card-side">
                            <div
                                className="text-card text-center"
                                style={{ "--bg-img": `url(${images[position]})` }}
                            >
                                <p className="heading-text mb-0 lh-36">
                                    {cards[position].heading}
                                </p>
                                <p className="fs-24 heading-text lh-36">
                                    {cards[position].subheading}
                                </p>
                                <p className="pt-30">{cards[position].description}</p>
                                <div className="text_card-btn">
                                    <button className="btn">Get Started!</button>
                                </div>
                            </div>
                            <div className="card-icons d-flex justify-content-center pt-4">
                                <div
                                    className="left_arrow-icon me-lg-5"
                                    onClick={handleLeftArrowClick}
                                >
                                    <BsArrowLeft />
                                </div>
                                <div
                                    className="right_arrow-icon ms-5 me-lg-5"
                                    onClick={handleRightArrowClick}
                                >
                                    <BsArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="personalized_bottom-section">
                        <div className="row px-5">
                            <div className="col-lg-4 col-md-6 col-12 order-2 order-lg-1 pt-3 pt-md-0">
                                <div className="left_side-image px-4">
                                    <img src={faride_image} className="img-fliud w-100" alt="" />
                                </div>
                                <div className="card-description pt-40">
                                    <p className="mb-0 heading-text fs-24 lh-24 text-center">
                                        Dr. Faride Ramos, M.D
                                    </p>
                                    <p className="body-text fs-16 lh-24 text-center">
                                        AlfaGenix Creator & CEO
                                    </p>
                                    <p className="body-text text-justify pt-2">
                                        Dr. Faride Ramos, M.D., FAARFM., ABAARM., is Board Certified
                                        in two specialties: Internal Medicine, as well as,
                                        Regenerative, AntiAging Medicine from the American Academy
                                        of AntiAging Medicine. She has also completed an advanced
                                        certification in Functional Endocrinology, having fulfilled
                                        one of her passions which is balancing hormones with
                                        bio-identical therapeutic options as well as nutritional,
                                        intestinal, mental, and detoxification supports.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12 order-1 order-lg-2">
                                <p className="heading-text text-center pt-150">
                                    Meet The Genius Minds Behind AlfaGenix
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 order-3 order-lg-3 pt-5 pt-md-0">
                                <div className="right_side-image px-4">
                                    <img src={ghods_image} className="img-fliud w-100" alt="" />
                                </div>
                                <div className="card-description pt-40">
                                    <p className="mb-0 heading-text fs-24 lh-24 text-center">
                                        Dr. Ali Ghods, M.D
                                    </p>
                                    <p className="body-text fs-16 lh-24 text-center">
                                        AlfaGenix Chief Medical Officer
                                    </p>
                                    <p className="body-text text-justify pt-2">
                                        Dr. Ali Ghods, MD is a Board Certified Neurosurgeon
                                        specializing in complex diseases of the brain and spine. He
                                        is affiliated with numerous hospitals in the Fort Lauderdale
                                        area and is the sectional chief of neurosurgery at Holy
                                        Cross hospital. Dr. Ghods, himself, attests to the results
                                        of using natural supplements as opposed to pharmaceuticals
                                        since they have significantly improved his own health as
                                        well as his patients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
