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
      restaurantList: []
    }
    this.editLocation = this.editLocation.bind(this);
  }

  editLocation() {

  }

  //should run this when enter is clicked in inputbar
  // getList = () => {
  //   axios
  //     .get(
  //       'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI'
  //     )
  //     .then(response => {
  //       console.log('no error yet')
  //       console.log(response.candidates.name)
  //     })
  //     .catch(
  //       console.log('error')
  //     )
  // }

  render() {
    // this.getList();
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
