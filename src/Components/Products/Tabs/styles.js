import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    marginTop: '50px'
  },
  tab: {
    color: '#505050',
    textDecoration: 'none',
    padding: '0 30px',
    textTransform: 'uppercase',
    fontSize: '18px',
    '&:hover': {
      color:' red'
    },
  }
}));