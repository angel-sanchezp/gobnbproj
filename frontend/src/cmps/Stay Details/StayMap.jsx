import React from 'react'
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'

import {data} from '../../services/dataAirbnb.js'

const containerStyle = {
    width: '100%',
    height: '60vh',
}

export function StayMap({stay}) {
    // console.log(stay.location)
    const loc = { lat: stay.location.lat, lng: stay.location.lng }
    const key = data.getKey()
    return (
        <section className='map-container bd' id="staymap">
            <div className="h2-general"><h2>Where you'll be</h2></div>
            <div>
                <LoadScript googleMapsApiKey={key}>
                    <GoogleMap mapContainerStyle={containerStyle} center={loc} zoom={16}>
                        <Marker name={'Current location'} position={loc} />
                        <InfoWindow position={loc}>
                            <h1>Exact location provided after booking</h1>
                        </InfoWindow>
                    </GoogleMap>
                </LoadScript>
            </div>
            <div>
                <h4>{stay.location.address}</h4>
                <div className="map-info">
                <p>More information about location after booking</p>
                </div>
            </div>
        </section>
    )
}

 