import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root: {
      maxWidth: '100%',
      minHeight: '320px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    productName: {
      padding: '0 15px',
      color: '#414141',
      fontSize: '1.1rem',
    },
    productPrice: {
      padding: '0 15px',
      fontWeight: 'bold',
    },
  }));  