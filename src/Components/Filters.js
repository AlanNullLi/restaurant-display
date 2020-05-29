import React from 'react';
import { Menu, Dropdown, Button, Input } from 'antd';
import './Filter.css'
// import { } from '../App.js'


class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null,
      userAddress: null
    }

    this.getLocation = this.getLocation.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
    this.getUserAddress = this.getUserAddress.bind(this)

  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates = (position, ) => {
    console.log("hi");
    console.log(position);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      default:
        alert("An unknown error occurred.");
        break;
    }
  }

  getUserAddress = (e) => {
    this.setState({
      userAddress: e.target.value
    })
    // this.updateRestaurants.props(this.props.userAddress)
  }

  render() {
    const rating = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            ★

                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            ★★
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            ★★★
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            ★★★★
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            ★★★★★
                </a>
        </Menu.Item>
      </Menu>
    );

    const price = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            $
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            $$
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            $$$
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            $$$$
                </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className='FiltersClass'>
        <Dropdown overlay={rating} placement="bottomLeft">
          <Button>Rating</Button>
        </Dropdown>

        <Dropdown overlay={price} placement="bottomLeft">
          <Button>Pricing</Button>
        </Dropdown>

        <Input
          id='textArea'
          placeholder='Input Address'
          value={this.state.userAddress}
          onChange={(e) => this.getUserAddress(e)}
        ></Input>
        <Button
          type='submit'
          onClick={() => this.props.updateRestaurants(this.state.userAddress, 38.0336, -78.5080, 5000, 4)}
        >Submit Address</Button>
        <Button
          onClick={this.getLocation}
        >Share Location</Button>
      </div >
    )
  
}
}

export default Filters;