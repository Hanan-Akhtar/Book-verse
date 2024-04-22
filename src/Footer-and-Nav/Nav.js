import { ShoppingCart, Person, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = ({ setIsCartOpen }) => {
    return (
        <>
            {/* navbar section strt here */}
            <nav className="navbar bg-light navbar-expand-lg navbar-light top-nav">
                <div className="container">
                    <Link className="navbar-brand" href="#">BookVerse</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Author</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="input-group">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <Link className="input-group-text color">
                                    <Search />
                                </Link>
                            </div>
                        </form>
                        <div className="right-content">
                            <button className="btn color mx-2" onClick={() => setIsCartOpen(true)}>
                                <ShoppingCart />
                            </button>
                            <Link to="/signIn" className="btn color mx-2"><Person /> Sign In</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
