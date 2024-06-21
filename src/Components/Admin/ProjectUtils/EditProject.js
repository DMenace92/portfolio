import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Styles from './EditProject.module.css'

const EditProject = () => {
  const { proID } = useParams()
  console.log(proID, 'this is the pro ID')

  const [formData, setFormData] = useState({
    projectName: '',
    projectLink: '',
    projectFeatures: [''],
    projectTechnologies: [''],
    images: [],
    videos: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name.startsWith('projectTechnologies')) {
      const index = parseInt(name.split('[')[1].split(']')[0])
      const projectTechnologies = [...formData.projectTechnologies]
      projectTechnologies[index] = value
      setFormData({
        ...formData,
        projectTechnologies,
      })
    } else if (name.startsWith('projectFeatures')) {
      const index = parseInt(name.split('[')[1].split(']')[0])
      const projectFeatures = [...formData.projectFeatures]
      projectFeatures[index] = value
      setFormData({
        ...formData,
        projectFeatures,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData({
      ...formData,
      [name]: [...files],
    })
  }

  const addTechnology = () => {
    setFormData({
      ...formData,
      projectTechnologies: [...formData.projectTechnologies, ''],
    })
  }

  const addFeature = () => {
    setFormData({
      ...formData,
      projectFeatures: [...formData.projectFeatures, ''],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Add your logic to handle form submission here
  }

  return (
    <div className={Styles.projectHolderArea}>
      <div className={Styles.projectCreateMainContainer}>
        <form className={Styles.projectCreateForm} onSubmit={handleSubmit}>
          <label>
            Project Name:
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
            />
          </label>
          <label>
            Project Link:
            <input
              type="text"
              name="projectLink"
              value={formData.projectLink}
              onChange={handleChange}
            />
          </label>

          <label>
            Project Features:
            <div className={Styles.techHolder}>
              {formData.projectFeatures.map((feature, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name={`projectFeatures[${index}]`}
                    value={feature}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <button type="button" onClick={addFeature}>
              Add Another Feature
            </button>
          </label>

          <label>
            Project Technologies:
            <div className={Styles.techHolder}>
              {formData.projectTechnologies.map((technology, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name={`projectTechnologies[${index}]`}
                    value={technology}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <button type="button" onClick={addTechnology}>
              Add Another Technology
            </button>
          </label>

          <label>
            Images:
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </label>
          <label>
            Videos:
            <input
              type="file"
              name="videos"
              accept="video/*"
              multiple
              onChange={handleFileChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={Styles.ProjectViewArea}>
        this is the bottom area
        <h6>Project Name: {formData.projectName}</h6>
        <h6>Project Link: {formData.projectLink}</h6>
        <h6>Project Technologies: {formData.projectTechnologies.join(', ')}</h6>
        <h6>Project Features: {formData.projectFeatures.join(', ')}</h6>
      </div>
    </div>
  )
}
export default EditProject
