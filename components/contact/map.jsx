import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import 'leaflet-control-mini-map/dist/Control.MiniMap.min.css'
import 'leaflet-control-mini-map' // Import MiniMap from leaflet
import { useEffect } from 'react'
const MapComponent = () => {
  const mapTilerUrl = `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=PdrbDFtQAKjwo0m178NO`

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
  return (
    <MapContainer
      center={[45.4565, -122.6387]}
      zoom={14}
      style={{ height: '100%', width: '100%', zIndex: 1 }}
    >
      <TileLayer
        url={mapTilerUrl}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
      />
      <Marker position={[45.4565, -122.6387]} icon={customIcon}>
        <Popup>A pretty popup.</Popup>
      </Marker>{' '}
      <MiniMap />
    </MapContainer>
  )
}

export default MapComponent
