import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import './Filter.css'
import App from '../App.js'


class Filters extends React.Component {
    constructor(props){
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

    // pass down updateRestaurants as method props

    handleLocationError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
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

    render(){

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

 
        return(
            <div classname='FiltersClass'>
                    <Dropdown overlay={rating} placement="bottomLeft">
                        <Button>Rating</Button>
                    </Dropdown>

                    <Dropdown overlay={price} placement="bottomLeft">
                        <Button>Pricing</Button>
                    </Dropdown>

                    <input type="text" id="textArea" placeholder="Input Address" value={this.state.userAddress}  onChange={e=>this.getUserAddress(e)}> 
                    </input>      

                    {/* <button type='submit' onClick={this.getUserAddress}>Submit Location</button> */}
                    <button type='submit' onClick={() => this.props.updateRestaurants(this.getUserAddress)}>Submit Location</button>

                    <button onClick={this.getLocation}>Share Location</button>
                    {this.state.latitude} {this.state.longitude}
            </div>
        )
    }
}

export default Filters;