import React from 'react';
import './App.css';
import axios from 'axios';
import Restaurants from './Components/Restaurants.js';
import InputBar from './Components/InputBar.js';
import './.env'

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
  //pass in lat and lng fields
  //radius is in meters
  //location is the address but in lat lng
  //can enter address into keyword too if no need for search food functionality
  getList(radi, lat, lng, category, query) {
    const linkHead = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
    const location = 'location=' + lat.toString() + ',' + lng.toString()
    const radius = '&radius=' + radi.toString()
    const type = '&type=' + category.toString()
    const keyword = '&keyword=' + query.toString()
    // const rankby = '&rankby=distance'
    const key = '&opennow&key=' + process.env
    const url = linkHead + location + radius + type + keyword + key;
    axios
      .get(
        url
      )
      .then(response => {
        const responseList = response.data.results
        console.log(responseList[0])
        //can make i results.length if want all of them
        for (let i = 0; i < 10; i++) {
          const place = responseList[i];
          const restaurant = {
            name: place.name,
            address: place.formatted_address,
            //location stored as a pair of coords: "lat" and "lng"
            coords: place.geometry.location,
            hours: place.opening_hours,
            rating: place.rating,
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
      })
    // .catch(error => {
    //   console.log('error')
    // })
  }


  render() {
    this.getList(2000, 38.0293, -78.4767, 'restaurant', 'food');
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
