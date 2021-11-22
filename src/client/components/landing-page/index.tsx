import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import HypeGuardianLogo from '../../../asset/img/hypeguardian-logo.svg'
import {useScreenState} from '../../store/screen'

const useStyles = makeStyles((theme:Theme) => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    minHeight: '100vh',
    padding: '32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '24px',
    }
  },
  pageContainerPadding: {
    padding: '32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '24px',
    }
  },
  headerContent: {
    flex: 1,
    gap: '24px'
  },
  hypeguardianLogo: {
    width: '160px'
  },
  separator: {
    height: '240px',
    width: '2px',
    backgroundColor: 'rgb(60, 176, 228)',
    margin: '0 16px'
  }
}))
const LandingPage:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const classes = useStyles({})
  const mobile = screenType === 'xs-phone'
  return (
    <div className={classes.container}>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container direction={mobile? 'column':'row'} justify='center' alignItems='center' classes={{container:classes.headerContent}}>
          <img className={classes.hypeguardianLogo} src={HypeGuardianLogo}/>
          {!mobile && <div className={classes.separator}/>}
          <Typography variant='h3' align={mobile? 'center':'left'}>WORK IN<br/>PROGRESS</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandingPage