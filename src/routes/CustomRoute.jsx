import React from "react"
import { Route, withRouter } from "react-router-dom";
import MainLayout from "layout/MainLayout"
const CustomRoute = (props) => {
  let { component: Component, path, ...rest } = props;

  return (
    <Route
      path={path}
      component={() => {
        return (
          <MainLayout {...rest}>
            <Component {...rest} />
          </MainLayout>
        )
      }}
      {...rest}
    />
  )
}

export default withRouter(CustomRoute);