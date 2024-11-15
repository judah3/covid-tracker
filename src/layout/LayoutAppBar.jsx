import React, { useContext } from 'react'
import { AppBar, Toolbar, } from "@material-ui/core"
import { MapContext } from "context/MapContext"
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { dateFormat } from 'utils/common_functions';
const LayoutAppBar = ({ open }) => {
  const { state: { totalData } } = useContext(MapContext)
  return (
    <AppBar
      className="appbar-container"
      position="fixed"

    >
      <Toolbar className="appbar-toolbar">
        {
          totalData && (

            <>
              <div>
                <span className="app-title">
                  <span>Corona Virus Tracker </span>
                </span>
              </div>
              <div>
                <span className="date">
                  {dateFormat(new Date(totalData.lastUpdate))}
                </span>
              </div>

              <div className="appbar-total-details">
                <span>Total: </span>

                &emsp;

                <span className="appbar-label clr-confirmed">
                  <HowToRegIcon className="icon-details clr-confirmed" />
                  &nbsp;
                  <span>{totalData.confirmed.value}</span>
                </span>

                &emsp;

                <span className="appbar-label clr-recovered">
                  <FavoriteIcon className="icon-details clr-recovered" />
                  &nbsp;
                  <span>{totalData.recovered.value}</span>
                </span>
                &emsp;

                <span className="appbar-label clr-death">
                  <SentimentVeryDissatisfiedIcon className="icon-details clr-death" />
                  &nbsp;
                  <span>{totalData.deaths.value}</span>
                </span>




              </div>
            </>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar