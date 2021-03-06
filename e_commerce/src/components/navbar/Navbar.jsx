import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './Styles'
import logo from '../../assets/logo512.png'
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to='/' varian="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce" height="25px" className={classes.image}/>
                        Thrift
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="Show cart item" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    </div>)}
                </Toolbar>   
            </AppBar>
        </>
    )
}

export default Navbar
