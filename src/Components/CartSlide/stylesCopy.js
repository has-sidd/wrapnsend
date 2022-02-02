import { makeStyles } from '@mui/styles';
import { hover } from '@testing-library/user-event/dist/hover';

export default makeStyles((theme) => ({
    toolbar: {
      marginBottom: '25px'
    },
    title: {
      marginTop: '5%',
    },
    emptyButton: {
      minWidth: '150px',
      margin: '8px 0 !important',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '5px',
      },
      [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
      },
      color: '#202020 !important',
      background: 'transparent !important',
      border: '1px solid #202020 !important',
      borderRadius: '0 !important',
      '&:hover': {
        color: '#fff !important',
        background: 'red !important',
        border: '1px solid red !important',
      }
    },
    checkoutButton: {
      minWidth: '150px',
      margin: '8px 0 !important',
      color: '#202020 !important',
      background: 'transparent !important',
      border: '1px solid #202020 !important',
      borderRadius: '0 !important',
      '&:hover': {
        color: '#fff !important',
        background: 'green !important',
        border: '1px solid green !important',
      }
    },
    link: {
      textDecoration: 'none',
    },
    cardDetails: {
      display: 'flex',
      marginTop: '10%',
      width: '100%',
      justifyContent: 'space-between',
      color: '#000000',
    },
    buttons: {
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column'
    }
  }));