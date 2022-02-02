import React from 'react';
import { Typography, Divider } from '@mui/material';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
  return (
    <footer className={classes.main}>
        <div className="row justify-content-evenly">
        <div className="col-3">
            <div className={classes.head}>
                <Typography className={classes.heading} variant='subtitle'>Wrap'n Go Limited</Typography>
            </div>
            <Divider />
            <div style={{color: '#707070'}}>
                <Typography variant='body2'>C-113 Nariana Industrial Area,<br />Phase -1, <br />New Delhi-110028 <br />INDIA</Typography> <br />
                <Typography variant='body2'> <b>PH: 011-4141 0060</b> </Typography>
                <Typography>Monday through Friday <br />10:00am to 6:00pm</Typography> <br />
                <Typography> <i> We would love to hear from you. <br />you can reach us at:</i> <br /> <b>helpdesk@archiesonline.com</b> </Typography>
            </div>
        
        </div>
        <div className="col-3">
        <div className={classes.head}>
                <Typography className={classes.heading} variant='subtitle'>Useful Links</Typography>
            </div>
            <Divider />
            <div style={{color: '#707070'}}>
                <Typography variant='body2'>Chocolates</Typography> <br />
                <Typography variant='body2'>Teddy Bear</Typography> <br />
                <Typography variant='body2'>Flowers</Typography> <br />
                <Typography variant='body2'>Gifts</Typography> <br />
                <Typography variant='body2'>Greeting Cards</Typography> <br />
            </div>
        </div>
        <div className="col-3">
        <div className={classes.head}>
                <Typography className={classes.heading} variant='subtitle'>Important Links</Typography>
            </div>
            <Divider />
            <div style={{color: '#707070'}}>
                <Typography variant='body2'>About us</Typography> <br />
                <Typography variant='body2'>Media</Typography> <br />
                <Typography variant='body2'>Franchise</Typography> <br />
            </div>
        </div>
        </div>
        
    </footer>
    );
};

export default Footer;
