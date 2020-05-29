import React from 'react';
import { Map, Popup, TileLayer } from 'react-leaflet';
import './LeafMap.css';


class LeafMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div id='map'>
                <Map center={[38.0336, -78.5080]} zoom={16}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {this.props.restaurantList.map(place => {
                        return (
                            <Popup
                                position={[place.coords.lat, place.coords.lng]}
                            >
                                <div className='PopupContent'>
                                    <b>{place.name}</b>
                                    <p>{place.address}</p>
                                    <p>Rating: {place.rating}</p>
                                </div>
                            </Popup>
                        )
                    })}
                </Map>
            </div>
        )
    }
}

export default LeafMap;