import React, { useContext } from 'react'
import { MapContext } from "context/MapContext"
import { ListItem, List, ListItemText, ListItemIcon } from "@material-ui/core"

export default function Sidebar() {
  const { state: { totalData, confirmed, selectedCase }, setCenter, dispatch } = useContext(MapContext)

  return (
    <div>
      {
        totalData ?
          <List className="list-container">
            {confirmed.map((item, index) => (
              <ListItem
                button
                style={{
                  backgroundColor: selectedCase.combinedKey === item.combinedKey ? "#444851" : null
                }}
                key={index}
                onClick={() => {
                  dispatch({ type: "set-selected-case", payload: { selectedCase: item } })
                  setCenter({
                    lat: item.lat,
                    lng: item.long
                  })
                }}
              >
                <ListItemIcon>
                  <img alt="" src={`https://www.countryflags.io/${item.iso2}/flat/32.png`} />
                </ListItemIcon>
                <ListItemText primary={`${item.countryRegion} ${item.provinceState ? ` - ${item.provinceState}` : ''}`} />
              </ListItem>
            ))}
          </List>

          : null
      }
    </div >
  )
}
