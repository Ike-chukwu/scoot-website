import React from 'react'
import LocationPicture from '../components/LocationPicture/LocationPicture'
import location from '../assets/images/careers-locations-hero-desktop.jpg'
import Map from '../components/Map/Map'
import CityListed from '../components/CityListed/CityListed'


const Location = () => {
  return (
    <div>
      <LocationPicture location="Location" image={location}/>
      <Map/>
      <CityListed/>
    </div>
  )
}

export default Location