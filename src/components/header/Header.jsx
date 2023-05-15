import "./header.css";
import logo from "/src/assets/header-logo.png"
import { Navbar } from '../navbar/Navbar'

export const Header = () => {

    return (
        <>
            <header className="header-section">
                <nav className="navbar nav-header navbar-expand-lg bg-white">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                        <div className="header-right-side" id="navbarTogglerDemo03">
                            <ul className="navbar-nav align-items-center d-none d-lg-flex">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="tel:18009960610">
                                        Call: 1800 996 0610
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ms-lg-5 ms-3" href="#">
                                        <button className="btn btn-secondary btn-w-128" type="submit">
                                            Quiz
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Navbar />
            </header>
        </>
    );
};
