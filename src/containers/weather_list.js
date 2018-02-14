import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData){
    if(!cityData) return;
    const name = cityData.city.name;
    const temp =cityData.list.map( weather => weather.main.temp );
    console.log("Temp ", temp)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temp}>
            <SparklinesLine color="red"/ >
          </Sparklines>
        </td>

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
