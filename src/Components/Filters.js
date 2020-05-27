import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import './Filter.css'


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
      <div classname='FiltersClass'>
        <Dropdown overlay={rating} placement="bottomLeft">
          <Button>Rating</Button>
        </Dropdown>

        <Dropdown overlay={price} placement="bottomLeft">
          <Button>Pricing</Button>
        </Dropdown>
        <button onClick={this.getLocation}>Get Location</button>
        {this.state.latitude} {this.state.longitude}
      </div>
    )
  }
}

export default Filters;