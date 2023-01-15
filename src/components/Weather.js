import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faList,faCloud ,faCloudSun,faLocation,faMapMarkerAlt,faTemperature0,faDroplet} from '@fortawesome/free-solid-svg-icons'

const Weather = props => (
    <div className='container-fluid'>
    <h2 className="title-tdy">  <FontAwesomeIcon icon={ faLocation} />Today</h2>
<div  className={" " + (props.city && props.country ? 'bx-dta' : 'bx-dta-emty ')}>

{props.city =="" && props.country =="" && <p>Choose Country and City</p>}   
{props.city && props.country && <p><FontAwesomeIcon icon={faMapMarkerAlt} /> city : {props.city} , Country : {props.country}</p>}
{props.temperature && <p><FontAwesomeIcon icon={faTemperature0} />  Temperature : {props.temperature} <b>C </b> </p>} 
{props.humidity && <p> <FontAwesomeIcon icon={faDroplet} />  Humidity : {props.humidity}  <b>% </b> </p> }
{props.description && <p> <FontAwesomeIcon icon={faCloud} /> Description : {props.description}  </p>}
{props.error &&  <p>Error : {props.error}</p>}



</div>
</div>
)


export default Weather ;