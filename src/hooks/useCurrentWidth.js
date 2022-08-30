import React, {useEffect, useState} from 'react'

export const useCurrentWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timeOutId = null
    const resizeListener = () => {
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => setWidth(window.innerWidth), 150)
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
  return width
}
