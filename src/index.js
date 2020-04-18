import { useLayoutEffect, useState } from 'react'

export const useWindowResize = (_) => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect((_) => {
    const updateSize = (_) => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return (_) => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}
