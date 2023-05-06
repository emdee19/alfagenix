import { useEffect, useRef, useState } from "react";
import "./health.css";
import { IoMdPlay } from "react-icons/io";
import video from "/src/assets/video.mp4"

export const Health = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
        setShowPlayButton(false);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                }
            });
        }, options);

        observer.observe(videoRef.current);
    }, []);

    return (
        <>
            <section className="health-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-12">
                            <p className="heading-text">
                                Get Control of Yourself, Get Optimal Health Again
                            </p>
                            <p className="body-text">
                                Choose the test kit that best describes your symptoms and take
                                our free online evaluation whenever, wherever.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="middle-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0 d-none d-lg-block health-image">
                            {/* image in bg */}
                        </div>

                        <div className="col-xl-4 col-lg-5 form-container ms-lg-4">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Fname"
                                        placeholder="FIRST NAME"
                                        required
                                    />
                                </div>

                                <div className="col-md-6 pt-50 pt-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Lname"
                                        placeholder="LAST NAME"
                                        required
                                    />
                                </div>
                                
                                <div className="col-12 pt-50">
                                    <select id="inputState" className="form-select">
                                        <option value="" hidden>CHOOSE YOUR TEST KIT</option>
                                        <option value="">TEST KIT 1</option>
                                        <option value="">TEST KIT 2</option>
                                        <option value="">TEST KIT 3</option>
                                    </select>
                                </div>

                                <div className="col-12 pt-50">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress2"
                                        placeholder="PHONE NUMBER"
                                    />
                                </div>

                                <div className="col-12 pt-50">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress2"
                                        placeholder="EMAIL ADDRESS"
                                    />
                                </div>

                                <div className="col-12 text-center pt-50">
                                    <button
                                        type="submit"
                                        className="btn btn-secondary btn-w-128 p-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bottom-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 position-relative">
                            <video
                                src={video}
                                className="w-100"
                                ref={videoRef}
                                onClick={togglePlay}
                                onPause={() => {
                                    setIsPlaying(false);
                                    setShowPlayButton(true);
                                }}
                                onPlay={() => {
                                    setIsPlaying(true);
                                    setShowPlayButton(false);
                                }}
                                onEnded={() => {
                                    setIsPlaying(false);
                                    setShowPlayButton(true);
                                }}
                            />
                            {showPlayButton && (
                                <div className="play-pause-button" onClick={togglePlay}>
                                    <IoMdPlay />
                                </div>
                            )}
                        </div>

                        <div className="col-xl-5 text-center">
                            <p className="heading-text pt-30">
                                AlfaGenix’s Hormonal Online Membership Programs
                            </p>
                            <p className="body-text pt-2">
                                You are unique, so your treatment should be too. AlfaGenix’s
                                online programs are tailored to your needs, with a team of
                                experts standing by to help you reach your goals!
                            </p>
                            <div className="bottom-section_btn pt-30">
                                <button className="btn btn-outline-primary btn-w-350 p-2">
                                    Get Personalized Assessment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
