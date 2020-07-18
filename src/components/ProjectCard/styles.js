import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 0, 1.5, 0),
    position: 'relative',
    // [theme.breakpoints.down('xs')]: {
    //   paddingTop: theme.spacing(7),
    //   '& img': {
    //     height: '100px',
    //     width: 'auto'
    //   },
    // },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(7),
      '& img': {
        // height: '200px',
        width: 'auto'
      },
    },
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 855,
      margin: '0 auto',
    '& img': {
      width: '100%',
    },
  },
  card: {
    maxWidth: 850,
    '& li': {
      color: theme.palette.grey[600],
    },
  },
}));