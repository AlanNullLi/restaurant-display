import React from 'react';
import "./Restaurants.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';


const StyledRating = withStyles({
    iconFilled: {
        color: '#a0a0a0',
    }
})(Rating);

const Restaurants = props => {
    const { returnableRestaurants } = props;


    return (
        <div>
            {returnableRestaurants.slice(0).map((entry) => {
                return (
                    <div className='main'>
                        <Card className='restaurant'>
                            <CardHeader title={entry.name} subheader={entry.address + ' from ' + entry.hours}> </CardHeader>
                            <CardContent>
                                <div className="ratings">
                                    <StyledRating
                                        name="dolla dolla bills"
                                        defaultValue={entry.price}
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
            }
        </div>
    );

}

export default Restaurants;
