import React from "react"
import {Route, Redirect} from "react-router-dom"
import Cookies from "js-cookie"

function ProtectedRoute(props) {
  const jwtToken = Cookies.get("jwt_token")

  if (jwtToken !== undefined) {
    return <Route {...props} />
  }
  return <Redirect to="/Login" />
}

export default ProtectedRoute
