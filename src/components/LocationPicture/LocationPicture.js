import React from 'react'
import './LocationPicture.scss'
import circle from '../../assets/patterns/white-circles.svg'

const LocationPicture = (props) => {
  return (
    <div className='location'>
        <img className='place' src={props.image} alt="" />
       <p className='location'>{props.location}</p> 
       <img src={circle} className='circle' alt="" />
    </div>
  )
}

export default LocationPicture