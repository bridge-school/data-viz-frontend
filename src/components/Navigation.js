import React from 'react';

class Navigation extends React.Component {
  handleClick = key => {
    this.props.onChange(key);
  };

  render() {
    const keys = Object.keys(this.props.buttons);
    const { buttons } = this.props;
    return (
      <aside>
        <nav>
          {keys.map(key => (
            // when button is clicked, pass the key back to setState
            <button onClick={() => this.handleClick(key)} key={key}>
              {buttons[key]}
            </button>
          ))}
        </nav>
      </aside>
    );
  }
}

export default Navigation;
