export const mainStyle = theme => ({
  main: {
    height: 'calc(100% - 64px)',
    overflow: 'hidden'
  },
  content: {
    height: '100%',
    overflow: 'auto'
  }
})

export const authButtonStyle = theme => ({
  rootLink: {
    fontSize: '22px'
  },
  login: {
    marginLeft: 'auto',
    marginRight: '0'
  }
})

export const landingPageStyle = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(38,166,154,1) 30%, rgba(92,107,192,1) 70%)'
  },
  buttons: {
    paddingBottom: '10rem'
  },
  button: {
    lineHeight: '3',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  blurb: {
    lineHeight: '2.5',
    fontWeight: '500'
  },
  standout: {
    fontSize: '22px',
    fontStyle: 'italic',
    fontWeight: '500'
  },
  primaryLogo: {
    fontSize: '22px',
    fontWeight: '500',
    color: theme.palette.primary.light
  },
  secondaryLogo: {
    fontSize: '22px',
    fontWeight: '500',
    color: theme.palette.secondary.light
  },
  gridContainer: {
    height: '100%'
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '1rem',
    overflow: 'hidden',
    '@media (max-width: 972px)': {
      '& p': {
        marginBottom: '4rem'
      }
    },
    '&:hover': {
      background: theme.palette.secondary.dark,
      '& h3': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.07)'
      },
      '& p': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.07)'
      },
      '& button': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.07)'
      }
    }
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '1rem',
    overflow: 'hidden',
    '&:hover': {
      background: theme.palette.primary.dark,
      '& h3': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.05)'
      },
      '& p': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.05)'
      },
      '& button': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.05)'
      }
    }
  },
  gridHeader: {
    marginBottom: '1rem'
  },
  gridBlurb: {
    marginBottom: '5rem'
  },
  gridButton: {
    display: 'block',
    margin: '0 auto 10rem auto'
  }
})
