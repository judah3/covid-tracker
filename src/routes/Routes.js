import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import CustomRoute from './CustomRoute'
import componentData from './ComponentData'

const CustomRoutes = () => {
  return componentData.map((item, i) => {
    return <CustomRoute key={i} {...item} />
  })
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoutes />
      </Switch>
    </BrowserRouter>
  )
}
