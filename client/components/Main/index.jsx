import React from 'react';
import Item from '../Item/index';

class MAIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Hi there', 'cool stuff brah', 'nibbletts']
    };
  }

  render() {
    return (
      <div className="">
        <h1>THIS SHOULD RENDER</h1>
        {
          this.state.list.map(message => <Item key={message} message={message} />)
        }
      </div>
    );
  }
}

export default MAIN;
