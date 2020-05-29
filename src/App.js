import React from 'react';
import './App.css';
import axios from 'axios';
import Restaurants from './Components/Restaurants.js';
import InputBar from './Components/InputBar.js';
import Filters from './Components/Filters.js';
import LeafMap from './Components/LeafMap.js';

require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      restaurantList: [
        {
          name: 'Roots',
          address: '123 Main St',
          coords: {
            lat: 38.0336,
            lng: -78.5080,
          },
          rating: 5,
          price: 3,
        }
      ],
    }
    this.updateRestaurants = this.updateRestaurants.bind(this);
  }

  //should run this when enter is clicked in inputbar
  //pass in lat and lng fields
  //radius is in meters
  //location is the address but in lat lng
  //can enter address into keyword too if no need for search food functionality
  //needs a min price and max for filtering

  getList(input, lat, lng, radi, max) {
    const linkHead = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
    // const type = '&type=' + category.toString()
    const query = '&query=' + input.toString()
    // const minPrice = '&minprice=' + min.toString()
    const location = '&location=' + lat.toString() + ',' + lng.toString()
    const radius = '&radius=' + radi.toString()
    const maxPrice = '&maxprice=' + max.toString()
    const key = '&opennow&key=' + api_key
    const url = linkHead + query + location + radius + maxPrice + key;
    axios
      .get(
        url
      )
      .then(response => {
        const responseList = response.data.results
        //can make i results.length if want all of them
        let list = []
        for (let i = 0; i < 10; i++) {
          const place = responseList[i];
          const restaurant = {
            name: place.name,
            address: place.formatted_address,
            //location stored as a pair of coords: "lat" and "lng"
            coords: place.geometry.location,
            hours: place.opening_hours,
            rating: place.rating,
            price: place.price_level,
            photos: place.photos,
          }
          console.log(restaurant)
          list.push(restaurant)
        }
        console.log(list)
        return list
      })
      .catch(error => {
        console.log('error')
      })
  }
  updateRestaurants(input, lat, lng, radi, max) {
    this.setState({
      restaurantList: this.getList(input, lat, lng, radi, max)
    })
  }

  componentDidMount() {
    // this.updateRestaurants('food charlottesville', 38.0336, -78.5080, 5000, 4);
  }


  render() {
    return (
      <div className='App'>
        <div>
          <InputBar location={this.state.location} editLocation={this.editLocation} />
          <Restaurants restuarantList={this.state.restaurantList} />
          <Filters getUserAddress={this.getUserAddress} updateRestaurants={this.updateRestaurants} />
        </div>
        <div>
          <LeafMap restaurantList={this.state.restaurantList} />
        </div>
      </div>
    )
  }
}

export default App;
