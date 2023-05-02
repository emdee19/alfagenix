import "./footer.css";
import logo from "/src/assets/header-logo.png";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
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
                                <br />
                                <button className="btn btn-secondary btn-w-250 p-2 mt-3">
                                    Call Now!
                                </button>
                            </div>
                            <div className="footer_social-icons mt-4">
                                <a href="#" className="ms-2 pb-1">
                                    <BsFacebook className="icons" />
                                </a>
                                <a href="#" className="ms-2 pb-1">
                                    <BsTwitter className="icons" />
                                </a>
                                <a href="#" className="ms-2 pb-1">
                                    <FaLinkedinIn className="icons" />
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
                                    <a href="">Meet The Doctors</a>
                                </li>
                                <li>
                                    <a href="">How It Works</a>
                                </li>
                                <li>
                                    <a href="">Natural Supplements</a>
                                </li>
                                <li>
                                    <a href="">Hormone Optimization</a>
                                </li>
                                <li>
                                    <a href="">Men’s Sexual Health</a>
                                </li>
                                <li>
                                    <a href="">Women’s Sexual Health</a>
                                </li>
                                <li>
                                    <a href="">FAQs</a>
                                </li>
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 footer_third-col order-2 order-lg-3">
                            <p className="">
                                <a href="" className="footer-ptp">
                                    PRIVACY NOTICE
                                </a>
                            </p>
                            <p className="pt-3">
                                <a href="" className="footer-ptp">
                                    TERMS AND CONDITIONS
                                </a>
                            </p>
                            <p className="pt-3">
                                <a href="" className="footer-ptp">
                                    PRIVACY POLICY
                                </a>
                            </p>
                            <p className="pt-3 text-break">
                                <a href="" className="d-flex">
                                    <MdLocationOn className="info-icons" />
                                    <span className="ms-3">
                                        Address: Lorem Ipsum Dolor Sit Amet Dummy Text here.
                                    </span>
                                </a>
                            </p>
                            <p className="pt-2">
                                <a href="" className="d-flex">
                                    <MdPermPhoneMsg className="info-icons" />
                                    <span className="ms-3">Phone: +123 456 78</span>
                                </a>
                            </p>
                            <p className="pt-2">
                                <a href="" className="d-flex">
                                    <MdEmail className="info-icons" />
                                    <span className="ms-3">Email: info@example.com</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
