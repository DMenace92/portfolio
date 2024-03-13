import React, { useCallback, useEffect, useRef } from 'react'
import { useActivePage } from '../../providers/activePageProvider'
import styles from './ContentContainer.module.css'

export const ContentContainer = (props) => {
  const { children, pageNumber } = props
  const containerRef = useRef(null)
  const { activePage, setActivePage, isAnimating, setIsAnimating } =
    useActivePage()

  useEffect(() => {
    if (activePage === pageNumber) {
      containerRef.current.style.transform = 'translateY(0vh) rotate(0deg)'
      containerRef.current.style.opacity = 1
    }
  }, [activePage, pageNumber])

  const goToNextPage = useCallback(async () => {
    setIsAnimating(true)

    containerRef.current.style.transform = 'translateY(-100vh) rotate(22deg)'
    containerRef.current.style.opacity = 0

    setTimeout(() => {
      setActivePage(pageNumber + 1)
      setIsAnimating(false)
    }, 300)
  }, [pageNumber, setActivePage, setIsAnimating])

  const goToPrevPage = useCallback(async () => {
    setIsAnimating(true)

    containerRef.current.style.transform = 'translateY(100vh) rotate(-22deg)'
    containerRef.current.style.opacity = 0

    setTimeout(() => {
      setActivePage(pageNumber - 1)
      setIsAnimating(false)
    }, 300)
  }, [pageNumber, setActivePage, setIsAnimating])

  useEffect(() => {
    const currentContainer = containerRef.current

    const handleScroll = () => {
      const clientHeight = containerRef.current.clientHeight
      const scrollHeight = containerRef.current.scrollHeight
      const scrollTop = containerRef.current.scrollTop
      const endReached = Math.ceil(clientHeight + scrollTop) === scrollHeight
      const startReached = scrollTop === 0

      // scroll bottom is reached
      if (!isAnimating && endReached && activePage < 4) {
        goToNextPage()
      }

      // scroll top is reached
      if (!isAnimating && startReached && activePage > 1) {
        goToPrevPage()
      }
    }

    currentContainer.addEventListener('scroll', handleScroll)

    return () => currentContainer.removeEventListener('scroll', handleScroll)
  }, [isAnimating, activePage, goToNextPage, goToPrevPage])

  return (
    <div
      className={`${styles.contentContainer} ${
        activePage === pageNumber ? styles.active : ''
        
      }`}
      ref={containerRef}
    >
      <div className={styles.contentContainerInner}>{children}</div>
    </div>
  )
}
