import React from 'react';
import { CssBaseline, } from "@material-ui/core"
import useStyles from "./styles"
import LayoutDrawer from "./LayoutDrawer"
import LayoutAppBar from "./LayoutAppBar"
export default function MiniDrawer({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <LayoutAppBar
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        setOpen={setOpen}
      />
      <LayoutDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        setOpen={setOpen}
      />
      <main className={classes.content} style={{ height: "95vh" }}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}