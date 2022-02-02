import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
    margin: '10px 0'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
    // root: {
    //     maxWidth: '100%',
    //     minHeight: '320px',
    //   },
    // media: {
    // //   height: 260,
    //     height: 0,
    //   paddingTop: '56.25%', // 16:9
    // },
    // cardContent: {
    //   display: 'flex',
    //   justifyContent: 'space-between',
    // },
    // cartActions: {
    //   justifyContent: 'space-between',
    // },
    buttons: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      marginBottom: '5px'
    },
    footer: {
      justifyContent: 'space-between !important'
    }
    // productName: {
    //     padding: '0 15px',
    //     color: '#414141',
    //     fontSize: '1.1rem',
    //   },
    //   productPrice: {
    //     padding: '0 15px',
    //     fontWeight: 'bold',
    //   },
  }));