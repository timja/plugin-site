import React, { PropTypes } from 'react';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}
