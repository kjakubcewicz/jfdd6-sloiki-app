import React from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import { maps } from '../../state/maps'

export default connect(
  state => ({
    users: state.users,
    games: state.games,
    maps: state.maps.maps,
  }),
  dispatch => ({
    maps: (value) => dispatch(maps(value))
  })
)(

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 54.403207, lng: 18.569882},
    zoom: 15
  };

  render() {
    const {
      params,
      games,
      users,
      maps
    } = this.props
    return (
      <div className="maps-container">
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={54.403207}
          lng={18.569882}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
  </div>
    );
  }
}
)


