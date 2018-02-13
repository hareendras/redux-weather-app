import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData){
    if(!cityData) return;
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );

  }
  render() {
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Preassure</th>
          <th>Humidity</th>
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
