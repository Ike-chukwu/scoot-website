import React from 'react'
import LocationPicture from '../components/LocationPicture/LocationPicture'
import locationD from '../assets/images/careers-locations-hero-desktop.jpg'
import locationT from '../assets/images/careers-locations-hero-tablet.jpg'
import locationM from '../assets/images/careers-location-hero-mobile.jpg'
import Map from '../components/Map/Map'
import CityListed from '../components/CityListed/CityListed'
import Transition from '../components/Transition/Transition'

const Location = () => {
  return (
    <div>
      <LocationPicture location="Location" imageD={locationD} imageT={locationT} imageM={locationM}/>
      <Map/>
      <CityListed/>
    </div>
  )
}

export default Transition(Location)