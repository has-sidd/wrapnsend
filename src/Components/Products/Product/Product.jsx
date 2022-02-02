import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.productName}>
                        {product.name}
                    </Typography>
                    <Typography className={classes.productPrice} variant="body2">
                        {product.price.formatted_with_code}
                    </Typography>
                </div>
                {/* <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" /> */}
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCartIcon color='error' />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
