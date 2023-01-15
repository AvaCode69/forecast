import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faList,faAlignLeft,faLocation ,faCloudSun} from '@fortawesome/free-solid-svg-icons'

class Title extends Component {
    render(){
        return(
            <h2 className="title">  <FontAwesomeIcon icon={faCloudSun} />Weather Forecast </h2>
        )
    }
}

export default Title ;