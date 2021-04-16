import React from 'react'
import { arrayOf, number, string, shape } from 'prop-types'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

import lightStyles from './light'

const Map = ({ locations, mapId, center, style }) => {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API}
    >
      <GoogleMap
        id={mapId || 'untitled-map'}
        mapContainerStyle={style}
        options={{ styles: lightStyles }}
        zoom={8}
        center={
          center
            ? center
            : {
                lat: 51.36537,
                lng: -0.16077
              }
        }
      >
        {locations &&
          locations.map((loc) => (
            <Marker position={loc} key={`MapLocation-${loc.lat}-${loc.lng}`} />
          ))}
      </GoogleMap>
    </LoadScript>
  )
}

Map.propTypes = {
  locations: arrayOf([
    shape({
      lng: number,
      lat: number
    })
  ]),
  mapId: string,
  center: shape({
    lng: number,
    lat: number
  })
}

export default Map
