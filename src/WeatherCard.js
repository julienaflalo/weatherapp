import React, { Component } from 'react';
import './WeatherCard.css';

class App extends Component {
  displayDayName(day){
    switch (day) {
      case 0 : return 'Sun';
      case 1 : return 'Mon';
      case 2 : return 'Tue';
      case 3 : return 'Wed';
      case 4 : return 'Thu';
      case 5 : return 'Fri';
      case 6 : return 'Sat';
      default: return 'Bug';
    }
  }
  displayMonthName(month){
    switch (month) {
      case 0 : return 'Jan';
      case 1 : return 'Feb';
      case 2 : return 'Mar';
      case 3 : return 'Apr';
      case 4 : return 'May';
      case 5 : return 'Jun';
      case 6 : return 'Jul';
      case 7 : return 'Aug';
      case 8 : return 'Sep';
      case 9 : return 'Oct';
      case 10 : return 'Nov';
      case 11 : return 'Dec';
      default: return 'Bug';
    }
  }
  displayImg(weather){
    const path = "img/414925-weather/svg/"
    switch(weather) {
      case 'sun' : return `${path}050-sun.svg`;
      case 'Clouds' : return `${path}049-clouds.svg`;
      case 'Clear' : return `${path}050-sun.svg`;
      case 'Rain' : return `${path}040-rain.svg`;
      default : return weather;
    }
  }
  render() {
    return (
      <div className="weather-card">
        <h3><span>{this.displayDayName(this.props.day)}</span> <span>{this.props.dayNum}</span> <span>{this.displayMonthName(this.props.month)}</span></h3>
        <div>{this.props.hours}:00</div>
        <img alt="WeatherImg" className="weather-img" src={this.displayImg(this.props.weather)}/>
        <div className="degres"><span className="min">{this.props.tempMin}°</span> <span className="max">{this.props.tempMax}°</span></div>
      </div>
    );
  }
}

export default App;
