import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
   const error = useRouteError();

  return (
    <div>
      <h1>{error.error.message}</h1>
      <h2>Status : {error.status}</h2>
    </div>
  )
}

export default ErrorPage
