import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar()
{
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid text-center">
                <span className="navbar-brand text-white" >To-Do List</span>
            </div>
        </nav>
    );
}
export default Navbar;