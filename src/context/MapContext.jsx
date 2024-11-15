import React, { useReducer, useEffect, useState } from "react";
import { get } from "utils/api"
const initialState = {
  confirmed: [],
  selectedCase: false,
  totalData: null,
};

const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [center, setCenter] = useState({
    lat: 12.879721,
    lng: 121.774017,
  })

  const [searchLoading, setSearchLoading] = useState(false)

  const [originalConfirmed, setOriginalConfirmed] = useState([])
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "set-loading":
        return { ...state, loading: action.payload.loading };
      case "set-confirmed":
        return { ...state, confirmed: action.payload.confirmed }
      case "set-selected-case":
        return { ...state, selectedCase: action.payload.selectedCase }
      case "set-total-data":
        return { ...state, totalData: action.payload.totalData }
      default:
        return null;
    }
  }, initialState);

  const getTotal = async () => {
    return await get("/")
      .then(result => {

        dispatch({
          type: "set-total-data",
          payload: {
            totalData: result.data
          }
        })
      })
  }


  const getConfirmed = async () => {
    return await get("/confirmed")
      .then(result => {
        setOriginalConfirmed(result.data)
        setCenter({
          lat: result.data[0].lat,
          lng: result.data[0].long
        })
        dispatch({
          type: "set-selected-case",
          payload: {
            selectedCase: result.data[0]
          }
        })
        dispatch({
          type: "set-confirmed",
          payload: {
            confirmed: result.data
          }
        })
      })
  }
  useEffect(() => {
    setLoading(true)
    getTotal().then(() => {
      getConfirmed()
      setLoading(false)
    })
    return () => {

      dispatch({
        type: "set-selected-case",
        payload: {
          selectedCase: false
        }
      })
      dispatch({
        type: "set-confirmed",
        payload: {
          confirmed: []
        }
      })
    }
  }, [])

  state.loading = loading
  state.center = center
  state.originalConfirmed = originalConfirmed
  state.searchLoading = searchLoading
  return (
    <MapContext.Provider
      value={{
        state,
        dispatch,
        setCenter,
        setOriginalConfirmed,
        setLoading,
        setSearchLoading
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export { MapProvider, MapContext };
