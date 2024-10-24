import React from 'react'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-light" style={{backgroundColor:'#2f2626'}} >
                <div class="container-fluid">
                    <a class="navbar-brand" style={{color:'white'}}>E-Cart</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header