import './App.css';
import { MenuItem, Select, FormControl } from "@material-ui/core";
import {useState, useEffect} from 'react';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country, // United States, United Kingdom
              value: country.countryInfo.iso2 // uk, usa, fr
            }));

            setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="App">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>

      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country} >
            <MenuItem value="worldwide">WorldWide</MenuItem>
          {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </div>
      
      <div className="app_stats">
          <InfoBox title="Coronavirus Cases" cases={123} total={2000} />

          <InfoBox title="Recovered" cases={1234} total={3000} />

          <InfoBox title="Deaths" cases={12345} total={4000} />
      </div>
    

      {/* Table */}
      {/* Graph */}

      {/* Map */}
      <Map />
    </div>
  );
}

export default App;
