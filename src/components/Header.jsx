import React from 'react';
import logo from './logo.png';
const Header = ()=>{
    return(
        <>
            <nav className="navbar navbar-light bg-info">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <img src={logo} alt="Logo Image" width="50" height="50" className="d-inline-block align-top"/>&nbsp;
                        <span className='text-light mr-0 ml-auto' style={{lineHeight:"2.5em"}}>Keep Notes For Reference</span>
                    </span>
                </div>
            </nav>
        </>
    )
};
export default Header;