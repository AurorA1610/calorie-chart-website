import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header p-4 mb-5 text-white text-center">
            <img className="d-block rounded-circle mx-auto" src={logo} alt="" />
            <h1 className="my-3 text-warning fw-bold">Calorie Chart</h1>
            <h6>Intake sufficient calorie to stay healthy</h6>
            <h3>Recommended Daily Calorie Intake: 2300</h3>
        </div>
    );
};

export default Header;