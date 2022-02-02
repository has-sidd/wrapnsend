import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  ButtonBase
} from "@mui/material";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  console.log(item)
  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={item.name} src={item.image.url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="body1">
                {item.name}
                </Typography>
                <Typography className={classes.id} style={{fontSize: '10px'}} color="textSecondary">
                  ID: {item.id}
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity-1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity+1)}>+</Button>
                </div>
              </Grid>
            </Grid>
            <Grid className={classes.footer} container>
              <Typography variant="body2">{item.line_total.formatted_with_symbol}</Typography>
              <Typography variant="body2" style={{ cursor: 'pointer', color: 'red' }} onClick={() => onRemoveFromCart(item.id)}>
                  Remove
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CartItem;
