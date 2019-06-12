import React from 'react'
import logo from '../logo.svg';

const Loader = () => {
    return (
      <div className="loader">
        <img src={logo} alt="Your app is loading, please wait." />
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
}

export default Loader
