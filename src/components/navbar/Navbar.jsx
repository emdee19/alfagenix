import { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <section className="navbar-section">
                <nav className="navbar navbar-expand-lg">
                    <div className="container custom-navbar-container">
                        <button
                            className="navbar-toggler ms-auto"
                            onClick={handleMenuClick}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll"
                            aria-controls="navbarScroll"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="toggler-icons">
                                {isMenuOpen ? <FaTimes /> : <FaBars className="close-icon" />}
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav navbar-nav-scroll flex-wrap">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        How it Works
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Natural Supplements
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Hormonal Optimization
                                    </a>
                                    <ul className="dropdown-menu sub-dropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Treatment Pricing
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Men’s Sexual Health
                                    </a>
                                    <ul className="dropdown-menu sub-dropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Treatment Pricing
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Women’s Sexual Health
                                    </a>
                                    <ul className="dropdown-menu sub-dropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Treatment Pricing
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Membership Programs
                                    </a>
                                    <ul className="dropdown-menu sub-dropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Fatigue Treatment
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Immune Treatment
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Nutrient Treatment
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Sleep Treatment
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Weight Treatment
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="nav-item d-flex d-lg-none">
                                    <a
                                        className="nav-link phone-number"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Call: 1800 996 0610
                                    </a>
                                    <a className="nav-link ms-5 ms-lg-0" href="#">
                                        <button
                                            className="btn btn-secondary btn-w-128"
                                            type="submit"
                                        >
                                            Quiz
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};
