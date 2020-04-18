# react-resize-tracker

> A react hook that tracks the window resize event and returns the current width and height

[![NPM](https://img.shields.io/npm/v/react-resize-tracker.svg)](https://www.npmjs.com/package/react-resize-tracker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[DEMO](https://hamzaboularbah.github.io/react-resize-tracker/)

## Install

```bash
npm install --save react-resize-tracker
```

## Usage

```jsx
import React from 'react'
import { useWindowResize } from 'react-resize-tracker'

const Example = (_) => {
  const [currentWidth, currentHeight] = useWindowResize()
  // now you have access to the current window width and height

  console.log(currentWidth) // Expect the current window width
  console.log(currentHeight) // Expect the current window height

  return (
    <React.Fragment>
      {/* Conditional rendering base on current window width */}

      {currentWidth < 500 ? (
        <h1> My current window width is less than 500px</h1>
      ) : (
        <h1> My current window width is more than 500px</h1>
      )}
    </React.Fragment>
  )
}
```

## License

MIT © [hamzaboularbah](https://github.com/hamzaboularbah)
