import React, { useState, useEffect } from 'react'
import ProjectCard from '../../Projects/ProjectCard'
import Styles from './ProjectView.module.css'
import { Link } from 'react-router-dom'

const ProjectView = (props) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (props.fetchProject) {
      props.fetchProject()
    }
  }, [props.fetchProject])
  console.log(props)

  useEffect(() => {
    if (props.pro) {
      setProjects(props.pro)
    }
  }, [props.pro])
  return (
    <div>
      <h2>Projects</h2>
      <div className={Styles.projectViewerWrapper}>
        {projects.length > 0
          ? projects.map((project) => (
              <div>
                <ProjectCard
                  key={project._id}
                  title={project.project_name}
                  techUsed={project.tools}
                  link={project.project_link}
                  features={project.features}
                  image={project.image}
                  video={project.video}
                  description={project.summary}
                />
                <button>
                  <Link to={`edit/${project._id}`}>Edit</Link>
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default ProjectView
