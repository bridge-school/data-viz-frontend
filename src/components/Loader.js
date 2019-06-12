import React from 'react'
import logo from '../logo.svg';

const Loader = () => {
    return (
        <div className="loader">
            <img src={logo} alt="Your app is loading, please wait."/>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loader
