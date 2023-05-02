import "./health.css";

export const Health = () => {
    return (
        <>
            <section className="health-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
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
                        <div className="col-lg-6 p-0">
                            <div className="health-image">
                                <img
                                    src="/src/assets/health-image.png"
                                    className="img-fluid pt-10"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 form-container ms-4">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputFname" className="form-label">
                                        Password
                                    </label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLname" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">
                                        Address 2
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress2"
                                        placeholder="Apartment, studio, or floor"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">
                                        City
                                    </label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">
                                        State
                                    </label>
                                    <select id="inputState" className="form-select">
                                        <option value="">CHOOSE YOUR TEST KIT</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">
                                        Zip
                                    </label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                        />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
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
                        <div className="col-9">
                            <video
                                src="/src/assets/Jaanam Fida-e-Haideri - By Sadiq Hussain - Original Official HD Kalam - 2018.mp4"
                                className=""
                                controls
                                width="991"
                                loop
                                autoPlay
                            ></video>
                        </div>
                        <div className="col-5 text-center">
                            <p className="heading-text pt-30">
                                AlfaGenix’s Hormonal Online Membership Programs
                            </p>
                            <p className="body-text pt-2">
                                You are unique, so your treatment should be too. AlfaGenix’s
                                online programs are tailored to your needs, with a team of
                                experts standing by to help you reach your goals!
                            </p>
                            <div className="bottom-section_btn pt-30">
                                <button className="btn btn-outline-primary btn-w-350 p-2">Get Personalized Assessment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
