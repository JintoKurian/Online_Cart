import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div>
            <nav className="navbar navbar-light" style={{ backgroundColor: '#2f2626' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>Online-Cart</a>
                    <form className="d-flex align-items-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success me-3" type="submit">Search</button>
                        <div className="d-flex">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-shopping fa-xl me-3" style={{ color: '#ffffff', cursor: 'pointer' }}></i>
                            </Link>
                            <Link>
                                <i className="fa-solid fa-heart fa-2xl" style={{ color: '#ff0000', cursor: 'pointer' }}></i>
                            </Link>

                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;


