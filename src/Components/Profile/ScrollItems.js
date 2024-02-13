import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../Actions/PageAction'
import styles from './ScrollItem.module.css'
import AboutMe from '../../Content/AboutMe'
import Experience from '../../Content/Experience'
import TopDecor from '../../Images/topDecor.svg'
import { ActivePageProvider } from '../../providers/activePageProvider'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import CodeDecal from '../CodeDecal/CodeDecal'

const ScrollItems = () => {
  // refs
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.currentPage)

  const pageOneRef = useRef(null)
  const pageTwoRef = useRef(null)
  const pageThreeRef = useRef(null)
  const pageFourRef = useRef(null)
  const scrollWrapper = useRef(null)

  // state
  const [pageHeights, setPageHeights] = useState([0, 0, 0, 0])

  // utils
  // const getViewHeight = useCallback((componentRef) => {
  //   if (
  //     componentRef.current &&
  //     componentRef.current.clientHeight > window.outerHeight
  //   ) {
  //     return componentRef.current.clientHeight - window.outerHeight
  //   } else {
  //     return 50
  //   }
  // }, [])

  // get page heights
  // useEffect(() => {
  //   const pageOneHeight = getViewHeight(pageOneRef)
  //   const pageTwoHeight = getViewHeight(pageTwoRef)
  //   const pageThreeHeight = getViewHeight(pageThreeRef)
  //   const pageFourHeight = getViewHeight(pageFourRef)

  //   setPageHeights([
  //     pageOneHeight,
  //     pageTwoHeight,
  //     pageThreeHeight,
  //     pageFourHeight,
  //   ])
  // }, [getViewHeight])

  // update current page on scroll
  // useEffect(() => {
  //   const scrollAction = (e) => {
  //     e.preventDefault()
  //     let newPage
  //     if (
  //       e.target.scrollTop >=
  //       pageHeights[0] + pageHeights[1] + pageHeights[2]
  //     ) {
  //       newPage = 4
  //     } else if (e.target.scrollTop >= pageHeights[0] + pageHeights[1]) {
  //       newPage = 3
  //     } else if (e.target.scrollTop >= pageHeights[0]) {
  //       newPage = 2
  //     } else {
  //       newPage = 1
  //     }

  //     if (currentPage !== newPage) {
  //       dispatch(setCurrentPage(newPage))
  //     }
  //   }

  //   const scrollElement = scrollWrapper.current
  //   scrollElement.addEventListener('scroll', scrollAction)

  //   return () => {
  //     scrollElement.removeEventListener('scroll', scrollAction)
  //   }
  // }, [currentPage, dispatch, pageHeights])

  // useEffect(() => {
  //   switch (true) {
  //     case currentPage.currentPage === 2:
  //       pageTwoRef.current.classList.add = styles.fadeIn
  //       break
  //     case currentPage.currentPage === 3:
  //       pageThreeRef.current.classList.add = styles.fadeIn
  //       break
  //     case currentPage.currentPage === 4:
  //       pageFourRef.current.classList.add = styles.fadeIn
  //       break
  //     default:
  //       pageOneRef.current.classList.add = styles.fadeIn
  //   }
  // }, [currentPage.currentPage])

  return (
    <ActivePageProvider>
      {/* <div className={styles.scrollItemsWrapper} ref={scrollWrapper}> */}
      {/* Uncomment the code below to see the pages update in the top left of the screen */}
      {/* <div style={{ position: 'fixed', top: 0, left: 0, color: 'white' }}>
        <div>Page: {currentPage.currentPage}</div>
        <div>Is Animating: {isAnimating ? 'True' : 'False'}</div>
      </div> */}
      {/* <div className={styles.topDecorStyle}>
          <h1>&lt; &gt;</h1>
          <img src={TopDecor} alt="code thingy" />
        </div> */}
      <div
        style={{
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ContentContainer pageNumber={1}>
          <AboutMe
            ref={pageOneRef}
            // className={`${styles.animateMe} ${
            //   currentPage.currentPage === 1 ? styles.fadeIn : ''
            // }`}
          />
        </ContentContainer>
        <ContentContainer pageNumber={2}>
          <Experience
            ref={pageTwoRef}
            // className={`${styles.animateMe} ${
            //   currentPage.currentPage === 2 ? styles.fadeIn : ''
            // }`}
          />
        </ContentContainer>
        <ContentContainer pageNumber={3}>
          <AboutMe
            ref={pageThreeRef}
            // className={`${styles.animateMe} ${
            //   currentPage.currentPage === 3 ? styles.fadeIn : ''
            // }`}
          />
        </ContentContainer>
        <ContentContainer pageNumber={4}>
          <AboutMe
            ref={pageFourRef}
            // className={`${styles.animateMe} ${
            //   currentPage.currentPage === 4 ? styles.fadeIn : ''
            // }`}
          />
        </ContentContainer>
        <div style={{ minHeight: pageHeights.reduce((a, b) => a + b) }} />
        <div className={styles.topDecorStyle}>
          <CodeDecal />
        </div>
        <div className={styles.bottomDecorStyle}>
          <CodeDecal />
        </div>
      </div>
    </ActivePageProvider>
  )
}
export default ScrollItems
