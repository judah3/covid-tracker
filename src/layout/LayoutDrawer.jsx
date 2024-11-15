import React, { useContext } from 'react'
import clsx from 'clsx';
import { Drawer, Divider, CircularProgress, } from "@material-ui/core"
import { Sidebar } from "components"
import useStyles from "./styles"
import { MapContext } from "context/MapContext"
import { SearchBar } from "components"

const LayoutDrawer = ({ open }) => {
  const classes = useStyles();
  const { state: { searchLoading } } = useContext(MapContext)

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <SearchBar />
      </div>
      <Divider />

      <div className="sidebar-container" >
        {
          searchLoading ?

            <div style={{ display: "flex", justifyContent: "center", padding: 15 }}>
              <CircularProgress />
            </div>

            :
            <Sidebar />
        }
      </div>

    </Drawer>
  )
}
export default LayoutDrawer