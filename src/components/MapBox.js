import { useState, useEffect } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import { useSelector } from 'react-redux'

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = () => {
  const selectedFlat = useSelector(state => state.selectedFlat)

  const [viewPort, setViewPort] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  useEffect(() => {

    if(selectedFlat) {
      setViewPort({
        latitude: selectedFlat.lat,
        longitude: selectedFlat.long,
        zoom: 12
      })
    }
    return () => {
      setViewPort({
        latitude: 47.3983,
        longitude: 8.5417,
        zoom: 8
      })
    }
  }, [selectedFlat])

  return (
    <div className="map-container">
      <Map
        {...viewPort}
        onMove={prev => setViewPort(prev.viewPort)}
        onViewportChange={viewPort => setViewPort(viewPort)}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {selectedFlat &&
          <Marker
          latitude= "47.3983"
          longitude= "8.5417"
            >
          </Marker>
        }

      </Map>
    </div>
  )
}

export default MapBox
