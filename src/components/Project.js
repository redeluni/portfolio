import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  id,
  github,
  strapiId,
  titolo,
  url,
  descrizione,
  immagine,
  stack,
  index,
}) => {
  return (
    <article className="project">
      <Image fluid={immagine.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{titolo}</h3>
        <p className="project-desc">{descrizione}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.titolo}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
