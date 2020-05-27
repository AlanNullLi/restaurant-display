import React from 'react';
import "./Restaurants.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';


const StyledRating = withStyles({
    iconFilled: {
        color: '#a0a0a0',
    }
})(Rating);
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
                            <CardHeader title={entry.name} subheader={entry.address + ' from ' + entry.hours}> </CardHeader>
                            <CardContent>
                                <div className="ratings">
                                    <StyledRating
                                        name="dolla dolla bills"
                                        defaultValue={entry.priceLevel}
                                        icon="$"
                                        max={4}
                                        emptyIcon=' '
                                        readOnly
                                    />
                                    <Rating name="read-only" value={entry.rating} precision={0.1} readOnly />
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="https://www.poptropica.com/">Visit Their Site</Button>
                            </CardActions>

                        </Card>
                    </div >
                );
            })
        );
    }
}

export default Restaurant;
