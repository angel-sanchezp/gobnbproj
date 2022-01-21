import React from 'react'
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '60vh',
}

export function StayMap({stay}) {
    // console.log(stay.location)
    const loc = { lat: stay.location.lat, lng: stay.location.lng }
    return (
        <section className='map-container'>
            <div><h2>Where you'll be</h2></div>
            <div>
                <LoadScript googleMapsApiKey='AIzaSyDRSjfskUcII98LZQXzMblQX_hnBhcX26k'>
                    <GoogleMap mapContainerStyle={containerStyle} center={loc} zoom={16}>
                        <Marker name={'Current location'} position={loc} />
                        <InfoWindow position={loc}>
                            <h1>Exact location provided after booking</h1>
                        </InfoWindow>
                    </GoogleMap>
                </LoadScript>
            </div>
            <div>
                <h3>{loc.address}</h3>
                <div className="map-info">
                <p>More information about location</p>
                </div>
            </div>
        </section>
    )
}

 