import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Styles from './EditProject.module.css'

const EditProject = (props) => {
  const { proID } = useParams()
  console.log(proID, 'this is the pro ID')
  const [selectedProject, setSelectedProject] = useState(null)

  const [formData, setFormData] = useState({
    title: '',
    links: [{ url: '', label: '' }],
    features: [''],
    techUsed: [''],
    image: [{ link: '', description: '' }],
    video: [{ link: '', description: '' }],
    description: '',
  })

  // useEffect(() => {
  //   // Fetch the project by ID and set it to selectedProject
  //   // Assuming props.getProject is a function that fetches the project
  //   const fetchProject = async () => {
  //     const project = await props.updateProject(proID)
  //     setSelectedProject(project)
  //     setFormData({
  //       title: project.title || '',
  //       links: project.links || [{ url: '', label: '' }],
  //       features: project.features || [''],
  //       techUsed: project.techUsed || [''],
  //       image: [{ link: '', description: '' }] || [],
  //       video: [{ link: '', description: '' }] || [],
  //       description: project.description || '',
  //     })
  //   }

  //   fetchProject()
  // }, [proID, props])

  console.log(props.updateProject, 'edit prop area')

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name.startsWith('techUsed')) {
      const index = parseInt(name.split('[')[1].split(']')[0])
      const techUsed = [...formData.techUsed]
      techUsed[index] = value
      setFormData({ ...formData, techUsed })
    } else if (name.startsWith('features')) {
      const index = parseInt(name.split('[')[1].split(']')[0])
      const features = [...formData.features]
      features[index] = value
      setFormData({ ...formData, features })
    } else if (name.startsWith('links')) {
      const index = parseInt(name.split('[')[1].split(']')[0])
      const links = [...formData.links]
      links[index][name.split('.')[1]] = value
      setFormData({ ...formData, links })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData({ ...formData, [name]: files })
  }

  const addTechnology = () => {
    setFormData({ ...formData, techUsed: [...formData.techUsed, ''] })
  }

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] })
  }

  const addLink = () => {
    setFormData({
      ...formData,
      links: [...formData.links, { url: '', label: '' }],
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prepare links array of objects
    const links = formData.links.map((link) => ({
      url: link.url,
      label: link.label,
    }))

    // Prepare images array of objects
    const images = Array.from(formData.image).map((file) => ({
      link: `/path/to/images/${file.name}`,
      description: 'Image Description',
    }))

    // Prepare videos array of objects
    const videos = Array.from(formData.video).map((file) => ({
      link: `/path/to/videos/${file.name}`,
      description: 'Video Description',
    }))

    const projectData = {
      title: formData.title,
      techUsed: formData.techUsed,
      links: links,
      features: formData.features,
      image: images,
      video: videos,
      description: formData.description,
    }

    await props.updateProject(selectedProject._id, projectData)

    // Reset form data if necessary
    setFormData({
      title: '',
      links: [{ url: '', label: '' }],
      features: [''],
      techUsed: [''],
      image: [{ link: '', description: '' }],
      video: [{ link: '', description: '' }],
      description: '',
    })
  }

  return (
    <div className={Styles.projectHolderArea}>
      <div className={Styles.projectCreateMainContainer}>
        <div className={Styles.scrollFormFix}>
          <form className={Styles.projectCreateForm} onSubmit={handleSubmit}>
            <label className={Styles.editProjectLabel}>
              Project Name:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>

            <label className={Styles.editProjectLabel}>
              Project Links:
              <div>
                {formData.links.map((link, index) => (
                  <div key={index} className={Styles.linkGroup}>
                    <input
                      type="text"
                      name={`links[${index}].url`}
                      value={link.url}
                      onChange={handleChange}
                      placeholder="URL"
                    />
                    <input
                      type="text"
                      name={`links[${index}].label`}
                      value={link.label}
                      onChange={handleChange}
                      placeholder="Label"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addLink}
                  className={Styles.addButton}
                >
                  Add Another Link
                </button>
              </div>
            </label>

            <label className={Styles.editProjectLabel}>
              Project Features:
              <div>
                {formData.features.map((feature, index) => (
                  <div key={index} className={Styles.featureGroup}>
                    <input
                      type="text"
                      name={`features[${index}]`}
                      value={feature}
                      onChange={handleChange}
                      placeholder={`Feature ${index + 1}`}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className={Styles.addButton}
                >
                  Add Another Feature
                </button>
              </div>
            </label>

            <label className={Styles.editProjectLabel}>
              Project Technologies:
              <div>
                {formData.techUsed.map((technology, index) => (
                  <div key={index} className={Styles.technologyGroup}>
                    <input
                      type="text"
                      name={`techUsed[${index}]`}
                      value={technology}
                      onChange={handleChange}
                      placeholder={`Technology ${index + 1}`}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTechnology}
                  className={Styles.addButton}
                >
                  Add Another Technology
                </button>
              </div>
            </label>

            <label className={Styles.editProjectLabel}>
              Images:
              {/* <div>
                {formData.image.map((image, index)=>{})} */}
              <input
                type="file"
                name="image"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              {/* </div> */}
            </label>

            <label className={Styles.editProjectLabel}>
              Videos:
              <input
                type="file"
                name="video"
                accept="video/*"
                multiple
                onChange={handleFileChange}
              />
            </label>

            <label className={Styles.editProjectLabel}>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Project Description"
              />
            </label>

            <button type="submit" className={Styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className={Styles.projectViewArea}>
        <h6 className={Styles.sectionTitle}>Project Name: {formData.title}</h6>
        <h6 className={Styles.sectionTitle}>Project Links:</h6>
        {formData.links.map((link, index) => (
          <div key={index} className={Styles.linkPreview}>
            <p>URL: {link.url}</p>
            <p>Label: {link.label}</p>
          </div>
        ))}
        <h6 className={Styles.sectionTitle}>
          Project Technologies: {formData.techUsed.join(', ')}
        </h6>
        <h6 className={Styles.sectionTitle}>
          Project Features: {formData.features.join(', ')}
        </h6>
        <h6 className={Styles.sectionTitle}>
          Description: {formData.description}
        </h6>
      </div>
    </div>
  )
}

export default EditProject
