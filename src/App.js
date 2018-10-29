import React, { Component } from 'react';
import WeatherCard from './WeatherCard.js';
import './App.css';
import APIKEY from './apikey.js';

// var json = require('./weather.json');


class App extends Component {
  constructor(){
    super();
    this.state = {
      error : null,
      isLoaded : false,
      meteo : []
    }
  }
  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Paris,us&mode=json&appid=${APIKEY}`)
    .then((res) => {
      // console.log(res);
      if (res.ok) this.setState({isLoaded: true});
      return res.json();
    })
    .then((response) => {
      //console.log(response.list);
      this.loadWeather(response.list)
    })
  }
  loadWeather(json){
    let meteo = this.state.meteo;
    for (let i=0; i<json.length; i++){
      // console.log(json[i]);
      let dateOfTheDay = new Date(json[i].dt_txt);
      let day = dateOfTheDay.getDay();
      let month = dateOfTheDay.getMonth();
      let dayNum = dateOfTheDay.getDate();
      let hours = dateOfTheDay.getHours();
      // console.log(hours);
      let weather = json[i].weather[0].main;
      let tempMin = (json[i].main.temp_min - 273.15).toFixed(0);
      let tempMax = (json[i].main.temp_max - 273.15).toFixed(0);
      let key = i;
      meteo.push({"day": day, "month": month, "dayNum": dayNum, "weather": weather, "hours": hours, "tempMin": tempMin, "tempMax": tempMax, "key" : key});
    }
    this.setState(meteo);
  }
  displayList(meteo){
    const weatherForecast = meteo.map((meteo, index) => {
      if (meteo.hours === 12){
        return(<WeatherCard key={meteo.key} day={meteo.day} month={meteo.month} dayNum={meteo.dayNum} hours={meteo.hours} weather={meteo.weather} tempMin={meteo.tempMin} tempMax={meteo.tempMax}/>);
      } else return null;
    });
    return weatherForecast;
  }
  render() {
    let {error, isLoaded} = this.state;
    // meteo = this.loadWeather(json);
    if (error) return <div>Error : {error.message}</div>;
    else if (!isLoaded) return <div>Loading...</div>;
    else{
      return (
        <div className="App">
          <h1>Weather for Paris</h1>
          {this.displayList(this.state.meteo)}
        </div>
      );
    }
  }
}

export default App;
