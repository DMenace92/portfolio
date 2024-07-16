import React, { useState } from 'react'
import styles from './ProjectCreation.module.css'

const ProjectForm = ({ createProject, createImage }) => {
  const [title, setTitle] = useState('')
  const [techUsed, setTechUsed] = useState('')
  const [links, setLinks] = useState([{ url: '', label: '' }])
  const [features, setFeatures] = useState([''])
  const [images, setImages] = useState([{ link: '', description: '' }])
  const [videos, setVideos] = useState([{ link: '', description: '' }])
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    const projectData = {
      title,
      techUsed: techUsed.split(',').map((tech) => tech.trim()),
      links,
      features,
      images: images,
      videos,
      description,
      createdAt: new Date(),
    }

    console.log('Submitting Project Data: ', projectData)
    // console.log("Submitting File: ", file);

    createProject(projectData)
    createImage(formData)

    // Reset form after submit
    setTitle('')
    setTechUsed('')
    setLinks([{ url: '', label: '' }])
    setFeatures([''])
    setImages([{ link: '', description: '' }])
    setVideos([{ link: '', description: '' }])
    setDescription('')
    setFile('')
  }

  const handleAddLink = () => {
    setLinks([...links, { url: '', label: '' }])
  }

  const handleAddFeature = () => {
    setFeatures([...features, ''])
  }
  const handleAddImage = () => {
    setImages([...images, { link: '', description: '' }])
  }

  const handleAddVideo = () => {
    setVideos([...videos, { link: '', description: '' }])
  }

  return (
    <div className={styles.createFormContainer}>
      <form className={styles.projectForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Technologies Used:</label>
          <input
            type="text"
            value={techUsed}
            onChange={(e) => setTechUsed(e.target.value)}
            placeholder="Comma separated values"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Links:</label>
          {links.map((link, index) => (
            <div key={index} className={styles.linkGroup}>
              <input
                type="text"
                value={link.url}
                placeholder="URL"
                onChange={(e) => {
                  const newLinks = [...links]
                  newLinks[index].url = e.target.value
                  setLinks(newLinks)
                }}
                required
              />
              <input
                type="text"
                value={link.label}
                placeholder="Label"
                onChange={(e) => {
                  const newLinks = [...links]
                  newLinks[index].label = e.target.value
                  setLinks(newLinks)
                }}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddLink}
          >
            Add Link
          </button>
        </div>

        <div className={styles.formGroup}>
          <label>Features:</label>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureGroup}>
              <input
                type="text"
                value={feature}
                onChange={(e) => {
                  const newFeatures = [...features]
                  newFeatures[index] = e.target.value
                  setFeatures(newFeatures)
                }}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddFeature}
          >
            Add Feature
          </button>
        </div>

        <div className={styles.formGroup}>
          <label>Images:</label>
          <input type="file" onChange={handleChange} />
          {images.map((image, index) => (
            <div key={index} className={styles.mediaGroup}>
              <input
                type="text"
                value={(image.link = file.name)}
                placeholder="Link"
                onChange={(e) => {
                  const newImages = [...images]
                  newImages[index].link = e.target.value
                  setImages(newImages)
                }}
                required
              />
              <input
                type="text"
                value={image.description}
                placeholder="Description"
                onChange={(e) => {
                  const newImages = [...images]
                  newImages[index].description = e.target.value
                  setImages(newImages)
                }}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddImage}
          >
            Add Image
          </button>
        </div>

        <div className={styles.formGroup}>
          <label>Videos:</label>
          {videos.map((video, index) => (
            <div key={index} className={styles.mediaGroup}>
              <input
                type="text"
                value={video.link}
                placeholder="Link"
                onChange={(e) => {
                  const newVideos = [...videos]
                  newVideos[index].link = e.target.value
                  setVideos(newVideos)
                }}
                required
              />
              <input
                type="text"
                value={video.description}
                placeholder="Description"
                onChange={(e) => {
                  const newVideos = [...videos]
                  newVideos[index].description = e.target.value
                  setVideos(newVideos)
                }}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddVideo}
          >
            Add Video
          </button>
        </div>

        <div className={styles.formGroup}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProjectForm
