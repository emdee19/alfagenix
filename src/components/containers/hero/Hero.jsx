import "./hero.css";

export const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <video autoPlay loop muted>
          <source src="/src/assets/video.mp4" type="video/mp4" />
        </video>
        <div className="container hero-container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <h1 className="text-white text-center fs-46 lh-70 heading-text">
                Personalized Hormonal & Wellness Treatment Designed For You!
              </h1>
            </div>
            <div className="col-lg-6 col-md-8 col-10">
              <p className="text-center text-white body-text p-4">
                Your body and mind have always been connected, but sometimes you
                may not feel like that is true. That is why AlfaGenix was
                created. You are unique and therefore we will give you a unique
                personalized treatment.
              </p>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary hero-btn mt-5 btn-w-250 p-2">
              Get Started!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
