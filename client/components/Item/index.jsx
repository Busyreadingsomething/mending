import React from 'react';
import PropTypes from 'prop-types';

export const genHighlight = (focus) => {
  const background = focus ? 'red' : 'white';
  return ({
    backgroundColor: background,
  });
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    }
  }
  
  onMouseEvent() {
    this.setState((state) => {
      const focus = !state.focus
      return { focus }
    })
  }

  render() {
    const { message } = this.props;
    const { focus } = this.state;
    const style = genHighlight(focus);
    return(
      <p
        onMouseEnter={() => this.onMouseEvent()}
        onMouseLeave={() => this.onMouseEvent()}
        style={style}
      >
        {message}
      </p>
    );
  }
}

Item.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Item;
