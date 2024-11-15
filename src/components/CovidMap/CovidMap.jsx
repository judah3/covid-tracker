import React, { useContext, } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
import DetailsDrawer from "./DetailsDrawer"
import { MapContext } from "context/MapContext"
import mapStyle from "./mapStyle"
import { Dialog, CircularProgress } from '@material-ui/core'
const Map = () => {
  const { state: { originalConfirmed, center, selectedCase }, dispatch } = useContext(MapContext)
  return (
    <GoogleMap defaultZoom={9}
      defaultOptions={{
        styles: mapStyle
      }}
      center={center}
    >
      {
        originalConfirmed.map((item, i) => {
          return (
            <Marker
              defaultClickable={true}
              defaultCursor="pointer"
              key={i}
              position={{
                lat: item.lat,
                lng: item.long
              }}
              onClick={() => {
                dispatch({
                  type: "set-selected-case",
                  payload: {
                    selectedCase: item
                  }
                })
              }}

            />
          )
        })
      }

      {
        selectedCase && (
          <div className="details-drawer-container">
            <DetailsDrawer />
          </div>
        )
      }
    </GoogleMap>
  )

}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const CovidMap = () => {
  const { state: { loading } } = useContext(MapContext)
  return (
    <div style={{ width: "100%", height: "98%" }}>

      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQLCxtNtBJa5mviJQEcBgqCNtmGO1Tk2U&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

      <Dialog open={loading} PaperProps={{ square: true, }}  >
        <div style={{ padding: 15, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: 250, height: 250 }}>
          <CircularProgress />
          <h4 style={{ textAlign: "center" }}>Loading..</h4>
        </div>
      </Dialog>
    </div >
  )
}

export default CovidMap