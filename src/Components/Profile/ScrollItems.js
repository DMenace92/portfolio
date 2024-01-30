import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Actions/PageAction';
import styles from './ScrollItem.module.css'
import AboutMe from '../../Content/AboutMe'
import Experience from '../../Content/Experience';

const ScrollItems = () => {
  // refs
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  const pageOneRef = useRef(null)
  const pageTwoRef = useRef(null)
  const pageThreeRef = useRef(null)
  const pageFourRef = useRef(null)
  const scrollWrapper = useRef(null)

  // state
  // NOTE: currentPage will eventually be moved to global state via redux for the sidebar to use
//   const [currentPage, setCurrentPage] = useState(1)
  const [pageHeights, setPageHeights] = useState([0, 0, 0, 0])
console.log(pageTwoRef, "P2")
  // utils
  const getViewHeight = useCallback((componentRef) => {
    if (
      componentRef.current &&
      componentRef.current.clientHeight > window.outerHeight
    ) {
      return componentRef.current.clientHeight
    } else {
      return window.outerHeight
    }
  }, [])

  // get page heights
  useEffect(() => {
    const pageOneHeight = getViewHeight(pageOneRef)
    const pageTwoHeight = getViewHeight(pageTwoRef)
    const pageThreeHeight = getViewHeight(pageThreeRef)
    const pageFourHeight = getViewHeight(pageFourRef)

    setPageHeights([
      pageOneHeight,
      pageTwoHeight,
      pageThreeHeight,
      pageFourHeight,
    ])
  }, [getViewHeight])

  // update current page on scroll
  useEffect(() => {
    const scrollAction = (e) => {
      let newPage
      if (
        e.target.scrollTop >=
        pageHeights[0] + pageHeights[1] + pageHeights[2] 
      ) {
        newPage = 4
      } else if (e.target.scrollTop >= pageHeights[0] + pageHeights[1]) {
        newPage = 3
      } else if (e.target.scrollTop >= pageHeights[0]) {
        newPage = 2
      } else {
        newPage = 1
      }

      if (currentPage !== newPage) {
        // setCurrentPage(newPage)
        dispatch(setCurrentPage(newPage))
      }
    }

    const scrollElement = scrollWrapper.current
    scrollElement.addEventListener('scroll', scrollAction)

    return () => {
      scrollElement.removeEventListener('scroll', scrollAction)
    }
  }, [currentPage,dispatch, pageHeights] , console.log(currentPage, "test"))

  return (
    <div className={styles.scrollItemsWrapper} ref={scrollWrapper}>
      {/* Uncomment the code below to see the pages update in the top left of the screen */}
      <div style={{ position: 'fixed', top: 0, left: 0, color: 'white' }}>
        Page: {currentPage.currentPage}
      </div>

      {/**
       * Currently I'm reusing the AboutMe component below as a placeholder for the other content.
       * Use the forwardRef like the AboutMe.js component
       */}
      <AboutMe ref={pageOneRef} />
      <Experience ref={pageTwoRef} />
      <AboutMe ref={pageThreeRef} />
      <AboutMe ref={pageFourRef} />
      <div style={{ minHeight: pageHeights.reduce((a, b) => a + b) }} />
    </div>
  )
}
export default ScrollItems