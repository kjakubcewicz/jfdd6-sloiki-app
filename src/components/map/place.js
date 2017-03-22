
import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {placeStyle} from './place-style.js';

export default class place extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div style={placeStyle}>
        {this.props.text}
      </div>
    );
  }
}