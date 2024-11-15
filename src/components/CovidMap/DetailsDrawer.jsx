import React, { useContext } from 'react'
import { Drawer } from '@material-ui/core'
import { MapContext } from "context/MapContext"
import { dateFormat } from "utils/common_functions"
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import HowToRegIcon from '@material-ui/icons/HowToReg';
export default function DetailsDrawer() {
  const { state: { selectedCase }, dispatch } = useContext(MapContext)
  return (
    <Drawer
      variant="permanent"
      anchor="right" open={selectedCase}
      onClose={() => { dispatch({ type: "set-selected-case", payload: { selectedCase: false } }) }}
    >

      <div className="drawer-container">
        <div className="drawer-header">
          <h2> Case Details </h2>
        </div>
        <div className="details-container">
          {console.log(selectedCase)}
          <div className="details-label-container ">
            <span className="label">Country</span>
            <span className="value" style={{ display: "flex", alignItems: "center" }}>
              <img alt="" src={`https://www.countryflags.io/${selectedCase.iso2}/flat/32.png`} />
              &emsp;
              <span>{selectedCase.countryRegion}</span>
            </span>
          </div>
          <br />
          <div className="details-label-container ">
            <span className="label">Region</span>
            <span className="value">{selectedCase.provinceState ? selectedCase.provinceState : "--"}</span>
          </div>
          <br />
          <div className="details-label-container clr-confirmed">
            <span className="label">Confirmed</span>
            <span className="value">
              <HowToRegIcon className="icon-details clr-confirmed" /> &nbsp;
              {selectedCase.confirmed}
            </span>
          </div>
          <br />
          <div className="details-label-container clr-recovered">
            <span className="label">Recovered</span>
            <span className="value">
              <FavoriteIcon className="icon-details clr-recovered" />
              &nbsp;
              {selectedCase.recovered}
            </span>

          </div>
          <br />
          <div className="details-label-container clr-death">
            <span className="label">Deaths</span>
            <span className="value">
              <SentimentVeryDissatisfiedIcon className="icon-details clr-death" />
               &nbsp;
              {selectedCase.deaths}
            </span>

          </div>
          <br />
          <div className="details-label-container" style={{ position: "absolute", bottom: 15 }}>
            <span className="label fz-14">Last updated</span>
            <span className="value fz-14">{dateFormat(new Date(selectedCase.lastUpdate))}</span>

          </div>
        </div>


      </div>
    </Drawer>
  )
}
