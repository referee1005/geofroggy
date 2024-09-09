import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import 'leaflet-control-mini-map/dist/Control.MiniMap.min.css'
import 'leaflet-control-mini-map' // Import MiniMap from leaflet
import { useEffect } from 'react'

const MapComponent = ({ lat, lang, mini, zoom, scale }) => {
  const mapTilerUrl = `https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=PdrbDFtQAKjwo0m178NO`

  const customIcon = new L.Icon({
    iconUrl: '/images/marker.png', // Path to your marker image
    iconSize: [35, 55], // Size of the icon
    iconAnchor: [17, 45], // Anchor point of the icon [left/right, top/bottom]
    popupAnchor: [0, -45] // Popup position relative to the marker
  })

  const MiniMap = () => {
    const map = useMap()

    useEffect(() => {
      const miniMapLayer = new L.TileLayer(mapTilerUrl, {
        minZoom: 0,
        maxZoom: 12, // Set a max zoom level for the minimap
        attribution:
          '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
      })

      const miniMap = new L.Control.MiniMap(miniMapLayer, {
        toggleDisplay: true, // Toggle to show/hide mini-map
        minimized: false, // Start with mini-map open
        position: 'bottomleft', // Position the mini-map at bottom-left
        width: 100,
        height: 100
      }).addTo(map)

      // Cleanup when the component unmounts
      return () => {
        map.removeControl(miniMap)
      }
    }, [map])

    return null
  }

  const ZoomControl = () => {
    const map = useMap()

    useEffect(() => {
      // Remove default zoom controls if any
      map.zoomControl && map.removeControl(map.zoomControl)

      if (scale) {
        // Add zoom control if scale is true
        const zoomControl = L.control
          .zoom({
            position: 'bottomright'
          })
          .addTo(map)

        // Cleanup when the component unmounts
        return () => {
          map.removeControl(zoomControl)
        }
      }
    }, [map, scale])

    return null
  }

  return (
    <MapContainer
      center={[lat, lang]}
      zoom={zoom || 14}
      style={{ height: '100%', width: '100%', zIndex: 1 }}
    >
      <TileLayer
        url={mapTilerUrl}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
      />
      <Marker position={[lat, lang]} icon={customIcon}>
        <Popup>A pretty popup.</Popup>
      </Marker>
      {mini && <MiniMap />}
      <ZoomControl />
    </MapContainer>
  )
}

export default MapComponent
