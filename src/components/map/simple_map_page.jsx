import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
import {Link} from 'react-router'
import {connect} from 'react-redux'

export default connect(
  state => ({
    maps: state.maps,
    users: state.users,
    games: state.games,
  }),
  dispatch => ({
    fetchUsersHelper: () => dispatch(fetchUsers())
  })
)(

class SimpleMapPage extends React.Component {
  render() {
    const {
      params,
      users,
      games,
      zoom,
      center,
      greatPlaceCoords
    } = this.props

    return (
      <GoogleMap
        apiKey={AIzaSyAPyvag8LwkwRzzkIKyrwmPgkSGVS3cuf8}
        center={center}
        zoom={zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
}
)


/*  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }*/

