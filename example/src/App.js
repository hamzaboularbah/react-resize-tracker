import React from 'react'
import { useWindowResize } from 'react-resize-tracker'

const App = () => {
  const [width, height] = useWindowResize()
  return (
    <React.Fragment>
      <h1>Current window size : {`${width}px x ${height}px`} </h1>
      <p>Resize the window to see changes</p>
    </React.Fragment>
  )
}

export default App
