import React from 'react';
import PropTypes from 'prop-types';
import DevTools from './DevTools';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
          {this.props.children}
          <DevTools />
      </div>
    );
  }
}
