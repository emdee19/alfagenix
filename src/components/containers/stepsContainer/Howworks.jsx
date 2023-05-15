import { Card } from "./Card";
import "./howWorks.css";
import { card_image1, card_image2, card_image3 } from "./index";

export const Howworks = () => {
    return (
        <>
            <section className="how_works-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <p className="heading-text">How it Works?</p>
                            <p className="body-text">
                                ALFAGENIX is a series of ONLINE PROGRAMS designed to cover and
                                treat several aspects of your health in order to regain your
                                well-being and achieve better long-lasting results. Discover a
                                complete, integrative, and personalized approach to your health.
                            </p>
                            <div className="works-btn">
                                <a href="#">
                                    <button className="btn btn-outline-primary btn-w-250 p-2">
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="how_works-bottom-section">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <p className="text-center heading-text">
                                    Regain Control & Reach Your Optimal Health In Three Easy Steps
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="step-1">
                                    <Card
                                        image={card_image1}
                                        alt="step 1"
                                        title="Step 1"
                                        description="Order your Test Kit or become
                                        a member"
                                        btn="Assessment"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="step-2">
                                    <Card
                                        image={card_image2}
                                        alt="step 2"
                                        title="Step 2"
                                        description="Get an Online Consultation with one
                                        of our Functional Doctors "
                                        btn="Order Test Kit Only"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div className="step-3">
                                    <Card
                                        image={card_image3}
                                        alt="step 3"
                                        title="Step 3"
                                        description="Get personalized treatment
                                        to your doorstep"
                                        btn="Book a Consult"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
