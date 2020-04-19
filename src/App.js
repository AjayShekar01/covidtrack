import React from 'react';

import { Cards, CountryPicker, Chart, Comparitivechart, CompCountryPicker } from './components';

import { fetchData } from './api/';

import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    CompData:{},
    CompCountry:'',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  handleCompCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ CompData:data, CompCountry: country });    
  }

  render() {
    const { data, country, CompData, CompCountry } = this.state;

  return(
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data}/>
      <h1>COVID tracker of Countries</h1>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country} /> 
      <h1>Comparision Chart</h1>
      <CompCountryPicker handleCompCountryChange={this.handleCompCountryChange} />      
      <Comparitivechart data={data} country={country} CompData = {CompData} CompCountry = {CompCountry}/>
    </div>
  )
}
}

export default App; 







