import React, {useEffect, useState} from 'react'
import styles from './ScrollItem.module.css'
import AboutMe from '../../Content/AboutMe';
import useDetectScroll from '@smakss/react-scroll-direction';

const ScrollItems = () => {
    const { scrollDir, scrollPosition } = useDetectScroll()
    const [scrollUp, setScrollUp] = useState(false);
    useEffect(() => {
      const scrollAction = (e) => {
        // console.log('scroll has been attempted')
        // console.log('scrollDir: ', scrollDir)
        // console.log( e.deltaX)
        if(!scrollUp && e.deltaX<0){
            setScrollUp(true);
            console.log('scrolled up')
        }else if( e.deltaX === 0){
          setScrollUp(false)
        }
      }
      window.addEventListener('wheel', (e) => scrollAction(e))
      return () => {
        window.removeEventListener('wheel', (e) => scrollAction(e))
      }
    })
  
  
  
  
  
  
    return (
        <div className={styles.scrollItemsWrapper}>
            <AboutMe/>
            
        </div>
    )
}
export default ScrollItems
