import "./footer.css";
import logo from "/src/assets/header-logo.png";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { MdLocationOn, MdPermPhoneMsg, MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="row ps-3 ps-md-0">
                        <div className="col-lg-3 col-sm-12 text-center footer_first-col order-3 mt-5 mt-lg-0 order-lg-1">
                            <img src={logo} alt="" className="footer-logo" />
                            <div className="footer-btn mt-3">
                                <button className="btn btn-primary btn-w-250 p-2">
                                    Learn More
                                </button>
                                <a href="tel:18009960610">
                                    <button className="btn btn-secondary btn-w-250 p-2 mt-lg-3">
                                        Call Now!
                                    </button>
                                </a>
                            </div>
                            <div className="footer_social-icons mt-4">
                                <a href="https://www.facebook.com/AlfaGenix-108422631603738" className="ms-2 pb-1" title="Facebook" target="_blank">
                                    <BsFacebook className="icons" />
                                </a>
                                <a href="https://www.instagram.com/alfagenix/" className="ms-2 pb-1" title="Instagram" target="_blank">
                                    <BsInstagram className="icons" />
                                </a>
                                <a href="https://www.youtube.com/channel/UC5PNpx5CP9fQnzPcNInTR8g" className="ms-2 pb-1" title="Youtube" target="_blank">
                                    <BsYoutube className="icons" />
                                </a>
                            </div>
                            <p className="pt-4">
                                <span>Copyright @ 2022. All Rights Reserved.</span>
                            </p>
                        </div>

                        <div className="col-lg-5 col-md-6 col-12 lh-36 footer_quick-links order-1 order-lg-2">
                            <h4 className="text-uppercase">Quick Links</h4>
                            <ul>
                                <li>
                                    <a href="#">Meet The Doctors</a>
                                </li>
                                <li>
                                    <a href="#">How It Works</a>
                                </li>
                                <li>
                                    <a href="#">Natural Supplements</a>
                                </li>
                                <li>
                                    <a href="#">Hormone Optimization</a>
                                </li>
                                <li>
                                    <a href="#">Men’s Sexual Health</a>
                                </li>
                                <li>
                                    <a href="#">Women’s Sexual Health</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 footer_third-col order-2 order-lg-3 pt-4 pt-lg-0 px-0">
                            <p className="">
                                <a href="#" className="footer-ptp">
                                    PRIVACY NOTICE
                                </a>
                            </p>
                            <p className="pt-3">
                                <a href="#" className="footer-ptp">
                                    TERMS AND CONDITIONS
                                </a>
                            </p>
                            <p className="pt-3">
                                <a href="#" className="footer-ptp">
                                    PRIVACY POLICY
                                </a>
                            </p>
                            {/* <p className="pt-3 text-break">
                                <a href="" className="d-flex">
                                    <MdLocationOn className="info-icons" />
                                    <span className="ms-3">
                                        Lorem Ipsum Dolor Sit Amet Dummy Text here.
                                    </span>
                                </a>
                            </p> */}
                            <p className="pt-2">
                                <a href="tel:18009960610" className="d-flex">
                                    <MdPermPhoneMsg className="info-icons" />
                                    <span className="ms-3">1800 996 0610</span>
                                </a>
                            </p>
                            {/* <p className="pt-2">
                                <a href="" className="d-flex">
                                    <MdEmail className="info-icons" />
                                    <span className="ms-3">info@example.com</span>
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
