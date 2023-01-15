import React, {Component } from "react";
import Title from './components/Title'
import Forms from './components/Forms'
import Weather from './components/Weather'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; 




const API_KEY = "869eee44188af1da686e67fa49416ba2" ;

class App extends Component {


  state= {
temperature : null ,
city: null ,
country: null ,
humidity: null ,
description:null ,
error:null 


  }

getWeather = async (e) => {
  e.preventDefault() ;

  const city = e.target.elements.city.value ;
  const country = e.target.elements.country.value ;

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data= await api_call.json() ;
  console.log(data) ;
  if(city && country){
    this.setState ({
      country : data.sys.country ,
      city : data.name ,
      temperature : data.main.temp   ,
      humidity : data.main.humidity ,
      description :data.weather[0].description ,
      error:''

    }) 
  }
  else{
    this.setState({
      temperature : null ,
city: null ,
country: null ,
humidity: null ,
description:null ,
error:'Pleas enter values' 
    })
  }
}

  render(){

    return(
      <div className="container">   
      <div className="row layout">       
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  box1"> 
        <Title  />
<Forms getWeather={this.getWeather}/>


</div>  
<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 box2"> 
<Weather
temperature ={this.state.temperature}
city ={this.state.city}
country ={this.state.country}
humidity ={this.state.humidity}
description ={this.state.description}
error ={this.state.error}

/>
</div>
      </div>
      </div>
    )

  }
}



export default App;