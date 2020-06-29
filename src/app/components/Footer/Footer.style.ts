import { makeStyles } from 'shared/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  copyright: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    lineHeight: 'normal',
  },

  nav: {
    marginBottom: '12px',

    '& $link': {
      color: '#000',
      textDecoration: 'none',

      '& + $link': {
        marginLeft: '50px',
      },
    },
  },

  text: {
    opacity: 0.3,
  },

  partners: {
    display: 'flex',

    '& $link': {
      fontSize: 0,

      '&:last-child': {
        marginLeft: '50px',
      }
    },
  },

  messari: {
    width: '119px',
    height: '40px'
  },

  etherium: {
    width: '160px',
    height: '40px'
  },

  link: {},
}));

export { useStyles };
