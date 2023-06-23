import React from 'react';
import NavBar from '../../NavBar/NavBarComponent'
import commingSoon from '../../../Images/commingsoon/25516.jpg'
import './Certification.css'

const Certification = () => {
    return (
        <div>
            <NavBar />
            <img className="imageCommingSoon" src={commingSoon}></img>
        </div>
    )
}
export default Certification