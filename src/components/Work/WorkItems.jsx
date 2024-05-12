import React from 'react'

export const WorkItems = ({item}) => {
  return (
    <div className="work_card" key={item.id}>
        <img src={item.image} alt={item.title} className='work_img' />
        <h3 className="work_title">{item.title}</h3>
        <a href={item.link} className="work_button" target='_blank'>
            View <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
    </div>
  )
}
