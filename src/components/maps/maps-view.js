import React from 'react';
import { connect } from 'react-redux'
import { maps } from '../../state/maps'

export default connect(
  state => ({
    maps: state.maps,
  }),
  dispatch => ({
    maps: (value) => dispatch(maps(value))
  })
)(

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 54.403207, lng: 18.569882},
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={54.403207}
          lng={18.569882}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}
)


