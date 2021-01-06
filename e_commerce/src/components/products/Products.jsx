import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './product/Product'
import useStyles from './Styles'

const Products = ({ products, onAddtoCart }) => {
    const classes = useStyles()
    if(!products.length) return <p>Loading...</p>
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddtoCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
