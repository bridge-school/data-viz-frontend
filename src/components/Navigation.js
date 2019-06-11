import React from 'react';

// create an object to match button name with keys
const buttonNames = {
  gender: 'gender identity',
  minority: 'minority groups',
  bootcamp: 'dev bootcamp',
  employment_status: 'employment status'
};
const keys = Object.keys(buttonNames);

class Navigation extends React.Component {
  handleClick = key => {
    this.props.onChange(key);
  };

  render() {
    return (
      <aside>
        <nav>
          {keys.map(key => (
            // when button is clicked, pass the key back to setState
            <button onClick={() => this.handleClick(key)} key={key}>
              {buttonNames[key]}
            </button>
          ))}
        </nav>
      </aside>
    );
  }
}

export default Navigation;
