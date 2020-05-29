import React from 'react';
import './App.css';
import axios from 'axios';
import Restaurants from './Components/Restaurants.js';
import InputBar from './Components/InputBar.js';
import Filters from './Components/Filters.js';

require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      restaurantList: [
        {
          name: 'Bodos',
          rating: '5',
          priceLevel: '1',
          address: 'The Corner, and others',
          hours: '7AM-8PM',
          isOpen: true,
        },
        {
          name: 'Roots',
          rating: '5',
          priceLevel: '2',
          address: 'The Corner',
          hours: '9-5',
          isOpen: false,
        },
        {
          name: 'Christian\'s Pizza',
          rating: '4.5',
          priceLevel: '3',
          address: 'The Corner',
          hours: '11AM-3AM',
          isOpen: true,
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
  // getList(category, input, min, max, lat, lng, radi) {
  //   const linkHead = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
  //   const type = '&type=' + category.toString()
  //   const query = '&query=' + input.toString()
  //   const minPrice = '&minprice=' + min.toString()
  //   const maxPrice = '&maxprice=' + max.toString()
  //   const location = 'location=' + lat.toString() + ',' + lng.toString()
  //   const radius = '&radius=' + radi.toString()
  //   const key = '&opennow&key=' + api_key
  //   const url = linkHead + type + query + minPrice + maxPrice + location + radius + key;
  //   axios
  //     .get(
  //       url
  //     )
  //     .then(response => {
  //       const responseList = response.data.results
  //       //can make i results.length if want all of them
  //       let list = []
  //       for (let i = 0; i < 10; i++) {
  //         const place = responseList[i];
  //         const restaurant = {
  //           name: place.name,
  //           address: place.formatted_address,
  //           //location stored as a pair of coords: "lat" and "lng"
  //           coords: place.geometry.location,
  //           hours: place.opening_hours,
  //           rating: place.rating,
  //           price: place.price_level,
  //           photos: place.photos,
  //         }
  //         console.log(restaurant)
  //         list.push(restaurant)
  //       }
  //       console.log(list)
  //       return list
  //     })
  //     .catch(error => {
  //       console.log('error')
  //     })
  // }

  getList(input) {
    const linkHead = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
    // const type = '&type=' + category.toString()
    const query = '&query=' + input.toString()
    // const minPrice = '&minprice=' + min.toString()
    // const maxPrice = '&maxprice=' + max.toString()
    // const location = 'location=' + lat.toString() + ',' + lng.toString()
    // const radius = '&radius=' + radi.toString()
    const key = '&opennow&key=' + api_key
    // const url = linkHead + type + query + minPrice + maxPrice + location + radius + key;
    const url = linkHead + query + key;

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


  // updateRestaurants(category, input, min, max, lat, lng, radi) {
  //   this.setState({
  //     restaurantList: this.getList(category, input, min, max, lat, lng, radi)
  //   })
  // }

  updateRestaurants(input) {
    this.setState({
      restaurantList: this.getList(input)
    })
    console.log('hi');
    console.log(this.getList(input));
  }

  componentDidMount() {
    this.updateRestaurants('restaurant', 'food charlottesville', 0, 4, 38.0336, -78.5080, 2000);
  }

  render() {
    return (
      <div className="mainApp">
        <div>hi</div>
        <InputBar location={this.state.location} editLocation={this.editLocation} />
        <Restaurants restuarantList={this.state.restaurantList} />
        <Filters userAddress={this.getUserAddress} updateRestaurants={this.updateRestaurants}/>

      </div>
    )
  }
}

export default App;
