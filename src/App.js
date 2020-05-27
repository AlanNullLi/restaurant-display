import React from 'react';
import './App.css';
import axios from 'axios';
import Restaurants from './Components/Restaurants.js';
import InputBar from './Components/InputBar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      restaurantList: [],
    }
    this.editLocation = this.editLocation.bind(this);
  }

  editLocation() {

  }



  //should run this when enter is clicked in inputbar
  //pass in a coords object with lat and lng fields
  //locationbias = circle: 2000@47.6918452,-122.2226413
  //use lat lng to do location bias
  //radius is in meters
  getList(radius, lat, lng) {
    axios
      .get(
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=roots%charlottesville&inputtype=textquery&fields=name,formatted_address,geometry,opening_hours,rating,price_level,photos&locationbias=circle:{radius}@{lat},{lng}&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI'
      )
      .then(response => {
        const responseList = response.data.candidates
        for (let i = 0; i < responseList.length; i++) {
          const place = responseList[i];
          const restaurant = {
            name: place.name,
            address: place.formatted_address,
            //location stored as a pair of coords: "lat" and "lng"
            coords: place.geometry.location,
            hours: place.opening_hours,
            rating: place.candidates,
            // reviews: place.reviews, will need to add to url too
            price: place.price_level,
            // phone: place.formatted_phone_number,
            // website: place.website,
            photos: place.photos,
          }
          console.log(restaurant)
          // this.setState(prevState => ({
          //   restaurantList: [...prevState.restaurantList, restaurant]
          // }))
        }
        // responseList.map(place => {
        //   const restaurant = {
        //     name: place.name,
        //     address: place.formatted_address,
        //     //location stored as a pair of coords: "lat" and "lng"
        //     coords: place.geometry.location,
        //     hours: place.opening_hours,
        //     rating: place.candidates,
        //     // reviews: place.reviews, will need to add to url too
        //     price: place.price_level,
        //     // phone: place.formatted_phone_number,
        //     // website: place.website,
        //     photos: place.photos,
        //   }
        //   console.log(restaurant)
        //   // this.setState(prevState => ({
        //   //   restaurantList: [...prevState.restaurantList, restaurant]
        //   // }))
        // })
      })
      .catch(error => {
        console.log('error')
      })
  }



  render() {
    this.getList(2000, 38.0293, 78.4767);
    return (
      <div>
        <div>hi</div>
        <InputBar location={this.state.location} editLocation={this.editLocation} />
        <Restaurants restuarantList={this.state.restaurantList} />
      </div>
    )
  }
}

export default App;
