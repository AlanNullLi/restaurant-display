import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="container">

            <Button variant="outlined"
                color="secondary"
                class="button"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                Ratings
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <StyledMenuItem>
                    <ListItemText primary="1 Star" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="2 Stars" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="3 Stars" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="4 Stars" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="5 Stars" />
                </StyledMenuItem>

            </StyledMenu>

            <Button variant="outlined"
                color="secondary"
                class="button"
                aria-controls="customized-price"
                aria-haspopup="true"
                onClick={handleClick}>
                Price
            </Button>

            <StyledMenu
                id="customized-price"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <StyledMenuItem>
                    <ListItemText primary="$" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="$$" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="$$$" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemText primary="$$$$" />
                </StyledMenuItem>

            </StyledMenu>

        </div>




    );
}