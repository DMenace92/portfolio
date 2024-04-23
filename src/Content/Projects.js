import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from '../Components/Projects/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Pharmacy App',
      techUsed: ['javascript', 'Node.js',"mongoDB", "Mongoose"],
      links: [{ url: 'https://', label: 'www.decorative.link.com' }],
      features: [
        'user db search complete with custom api',
        'user selection screen',
        'user details view',
      ],
      image: {
        link: 'https://www.volumetree.com/wp-content/uploads/2021/11/how-Rover-app-work.png',
        description: 'this image is dog',
      },
      // video: { link: 'https://...', description: 'this is also dog' },
      description:
        'it is about dogs and stuffs doing dog things like sniffing and cat nomming. they loves to noms the cats unless the cats is all prickly and pokey. then the doggses cries and poops themselves some morz. is disgustinin',
    },
    {
      title: 'Also Dog App 2',
      techUsed: ['javascript', 'typescript'],
      links: [{ url: 'https://', label: 'www.decorative.link.com' }],
      features: [
        'user db search complete with custom api',
        'user selection screen',
        'user details view',
      ],
      image: {
        link: 'https://s3-alpha.figma.com/hub/file/2192153279/e6c39181-4c3a-49e0-b467-1b67412c70b1-cover.png',
        description: 'this image is dog',
      },
      // video: { link: 'https://...', description: 'this is also dog' },
      description: 'it is about dog',
    },
  ]

  console.log('projects.length: ', projects.length)

  return (
    <div className={styles.ProjectMainContainer}>
      <div className={styles.ProjectBanner}>
        <h2>Projects</h2>
        {projects.length > 0
          ? projects.map((project, index) => (
              <ProjectCard
                key={project.title + index}
                title={project.title}
                techUsed={project.techUsed}
                links={project.links}
                features={project.features}
                image={project.image}
                video={project.video}
                description={project.description}
              />
            ))
          : null}
      </div>
    </div>
  )
}
export default Projects
