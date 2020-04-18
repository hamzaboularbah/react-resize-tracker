import React from 'react'
import { useWindowResizeTracker } from 'react-resize-tracker'

const App = () => {
  const [width, height] = useWindowResizeTracker()
  return <h1>current window size : {`${width}px x ${height}px`} </h1>
}

export default App
