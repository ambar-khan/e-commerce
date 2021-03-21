import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { classes } from 'istanbul-lib-coverage';

const Product = () => {
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name} />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {product.price}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Product

