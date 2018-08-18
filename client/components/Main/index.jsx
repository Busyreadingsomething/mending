import React from 'react';

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
          this.state.map(string => <p>{string}</p>)
        }
      </div>
    );
  }
}