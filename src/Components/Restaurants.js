import React from 'react';
import "./Restaurants.css";

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyRestaurants: [
                {
                    name: 'Bodos',
                    rating: '5',
                    priceLevel: '1',
                    address: 'The Corner',
                    hours: '9-5',
                    isOpen: false,
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
                    rating: '4',
                    priceLevel: '1',
                    address: 'The Corner',
                    hours: '9-5',
                    isOpen: false,
                }
            ]

        }
    }


    render() {
        return (null)
        // this.state.dummyRestaurants.slice(0).map((entry) => {
        //     return (
        //         <div className='main'>
        //             <p>Restaurant List Here</p>
        //             <div class="mdc-card">
        //                 <div class="mdc-card__media-content"> {entry.name} </div>
        //             </div>
        //         </div>
        //     );
        // })

    }

}

export default Restaurant;
