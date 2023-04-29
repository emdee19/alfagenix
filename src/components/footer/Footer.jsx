import "./footer.css";
import logo from "/src/assets/header-logo.png";

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={logo} alt="" />
                            <div className="footer-btn">
                                <button>Learn More</button>
                            </div>
                            <div className="footer-btn">
                                <button>Call Now!</button>
                            </div>
                            <div className="footer-social-icons">
                                <a href="">icon</a>
                                <a href="">icon</a>
                                <a href="">icon</a>
                            </div>
                            <span>Copyright @ 2022. All Rights Reserved.</span>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase">Quick Links</h4>
                            <ul>
                                <li>Meet The Doctors</li>
                                <li> How It Works</li>
                                <li>Natural Supplements</li>
                                <li>Hormone Optimization</li>
                                <li>Men’s Sexual Health</li>
                                <li>Women’s Sexual Health</li>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <p>PRIVACY NOTICE</p>
                            <p>TERMS AND CONDITIONS</p>
                            <p>PRIVACY POLICY</p>
                            <p>
                                <span>
                                    Address: Lorem Ipsum Dolor Sit Amet Dummy Text here.
                                </span>
                            </p>
                            <p>
                                <span>Phone: +123 456 78</span>
                            </p>
                            <p>
                                <span>Email: info@example.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
