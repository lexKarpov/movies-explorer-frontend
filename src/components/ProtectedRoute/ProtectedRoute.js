import React from 'react'
import { Route, useNavigate} from "react-router-dom"

function ProtectedRoute ({ isLogged, children, ...props }) {
  let navigate = useNavigate();
  console.log(props)
  return (
    <Route {...props}>
      {isLogged ? children : navigate('/signin')}
    </Route>
  )
}

export default ProtectedRoute
