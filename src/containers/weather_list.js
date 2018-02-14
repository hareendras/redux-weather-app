import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData){
    if(!cityData) return;
    const name = cityData.city.name;
    const temp =cityData.list.map( weather => weather.main.temp );
    const pressure = cityData.list.map( weather => weather.main.pressure);
    const humidity = cityData.list.map( weather => weather.main.humidity);

    console.log("Temp ", temp)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>  <Chart data={temp} color="orange" units="K"/>      </td>
        <td>  <Chart data={pressure} color="green" units="hPa"/>      </td>
        <td>  <Chart data={humidity} color="black" units="%"/>      </td>
      </tr>
    );

  }
  render() {
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Preassure (hPA)</th>
          <th>Humidity (%) </th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  console.log("WEATHER => ", weather);
  return { weather }; // { weather } === { weather : weather}
}

export default connect(mapStateToProps)(WeatherList);
