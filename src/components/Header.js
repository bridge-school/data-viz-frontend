import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const Header = () => (
  <header>
    <div className="wrapper heading">
      <Link to="/">
        <img src={logo} alt="Bridge School"/>
        <h1>
          Cohort Application Data
        </h1>
      </Link>
    </div>
  </header>
);

export default Header;
