import React from 'react';
const Footer = ()=>{
    return(
        <div className='row fixed-bottom'>
            <div className='col-12'>
                <p className='text-center bg-primary m-0'>Copyright©{new Date().getFullYear()}</p>
            </div>
        </div>
    )
};
export default Footer;