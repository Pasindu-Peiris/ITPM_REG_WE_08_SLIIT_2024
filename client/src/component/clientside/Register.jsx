import React from 'react';
import Nav from './Nav';
import Img from '../../Images/page-title-bg.png'; 

const Register = () => {
    return (
         <div style={{ position: 'relative' }}>
            <Nav />
            <div className='absolute top-0 left-0 w-full text-center mt-48'>
                <h1 className='font-bold text-3xl lg:text-4xl'>Register</h1>
            </div>
            <img src={Img} alt="Mountain" style={{ width: '100%', height: 'auto', marginTop: '2px' }} />
            <p className='text-slate-500 mx-96'>After creating an account, you'll be able to track your payment status,
                track the confirmation and you can also rate the tour after you finished the tour.</p>

            
        </div>
        
    );
};

export default Register;
