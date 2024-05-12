import React from 'react'
import "./Work.css"
import { Works } from './Works'

export const Work = () => {
  return (
    <section className="work section" id='projects'>
        <h2 className="section_title font-bold">Projects</h2>
        <span className="section_subtitle">Some of the projects include web development, app development,graphic & video editing,<br />SEO, Ads, content writing,and more.. that we have successfully delivered are given below.</span>

        <Works />
    </section>
  )
}
