import React from 'react';
import "./Restaurants.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyRestaurants: [
                {
                    name: 'Bodos',
                    rating: '5',
                    priceLevel: '1',
                    address: 'The Corner, and others',
                    hours: '9-5',
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
                    rating: '4',
                    priceLevel: '1',
                    address: 'The Corner',
                    hours: '9-5',
                    isOpen: true,
                }
            ]

        }
    }


    render() {
        let returnableRestaurants = this.state.dummyRestaurants.filter(function (e) {
            return e.isOpen;
        });
        return (

            returnableRestaurants.slice(0).map((entry) => {
                return (
                    <div className='main'>
                        <Card className='restaurant'>
                            <CardHeader title={entry.name} subheader="hello">    </CardHeader>
                            <CardContent>

                                <Typography className="address" color="textSecondary">
                                    {entry.address}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Visit Their Site</Button>
                            </CardActions>

                        </Card>
                    </div>
                );
            })
        );
    }
}

export default Restaurant;
