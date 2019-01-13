export const mainStyle = theme => ({
  main: {
    height: 'calc(100% - 64px)',
    overflow: 'hidden',
    paddingTop: '.35rem'
  },
  content: {
    height: '100%',
    overflow: 'auto'
  }
})

export const topNavStyle = theme => ({
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
  logo: {
    fontSize: '22px',
    fontWeight: '500'
  }
})
