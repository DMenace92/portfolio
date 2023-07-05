import { React } from 'react';
import NavBar from '../NavBar/NavBarComponent'
import commingSoon from '../../Images/commingsoon/25516.jpg';
import './projectsComponent.css'

const ProjectComponent = () => {
    return (
        <div>
            <NavBar />
            <div className="projectsContainer">
                <img className="projectCommingSoon" src={commingSoon} ></img>
            </div>

        </div>
    )
}
export default ProjectComponent