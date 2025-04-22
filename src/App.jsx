import React from 'react'
import Home from './page/Home'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

const App = () => {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Home />
    </div>
  )
}

export default App