import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

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
  '@keyframes noise': {
    '0%': {clip:'rect(40px, 999px, 135px, 0)'},
    '5%': {clip:'rect(77px, 999px, 435px, 0)'},
    '10%': {clip:'rect(44px, 999px, 25px, 0)'},
    '15%': {clip:'rect(72px, 999px, 298px, 0)'},
    '20%': {clip:'rect(90px, 999px, 390px, 0)'},
    '25%': {clip:'rect(65px, 999px, 84px, 0)'},
    '30%': {clip:'rect(62px, 999px, 33px, 0)'},
    '35%': {clip:'rect(80px, 999px, 275px, 0)'},
    '40%': {clip:'rect(21px, 999px, 200px, 0)'},
    '45%': {clip:'rect(92px, 999px, 110px, 0)'},
    '50%': {clip:'rect(14px, 999px, 384px, 0)'},
    '55%': {clip:'rect(62px, 999px, 30px, 0)'},
    '60%': {clip:'rect(14px, 999px, 265px, 0)'},
    '65%': {clip:'rect(1px, 999px, 326px, 0)'},
    '70%': {clip:'rect(49px, 999px, 450px, 0)'},
    '75%': {clip:'rect(39px, 999px, 267px, 0)'},
    '80%': {clip:'rect(35px, 999px, 350px, 0)'},
    '85%': {clip:'rect(89px, 999px, 413px, 0)'},
    '90%': {clip:'rect(42px, 999px, 40px, 0)'},
    '95%': {clip:'rect(11px, 999px, 328px, 0)'},
    '100%': {clip:'rect(35px, 999px, 348px, 0)'}
  },
  '@keyframes shift': {
    [['0%', '40%', '44%', '58%', '61%', '65%', '69%', '73%', '100%'].join(', ')]: {transform:'skewX(0deg)'},
    [['41%'].join(', ')]: {transform:'skewX(10deg)'},
    [['42%'].join(', ')]: {transform:'skewX(-10deg)'},
    [['59%'].join(', ')]: {transform:'skewX(40deg) skewY(10deg)'},
    [['60%'].join(', ')]: {transform:'skewX(-40deg) skewY(-10deg)'},
    [['63%'].join(', ')]: {transform:'skewX(10deg) skewY(-5deg)'},
    [['70%'].join(', ')]: {transform:'skewX(-50deg) skewY(-20deg)'},
    [['71%'].join(', ')]: {transform:'skewX(10deg) skewY(-10deg)'}
  },
  '@keyframes blur': {
    [['0%', '40%', '50%', '60%', '90%', '95%', '100%'].join(', ')]: {
      textShadow: [
        '0px -5px 10px rgb(102, 102, 102)',
        '0px 0px 5px rgba(102, 102, 102, 0)',
        '0px 0px 10px rgba(102, 102, 102, 0)',
        '2px 1px 15px rgba(100, 240, 255, 0)',
        '0px 0px 20px rgba(102, 102, 102, 0)'
      ].join(', ')
    },
    [['45%', '75%'].join(', ')]: {
      textShadow: [
        '0px -5px 10px rgb(102, 102, 102)',
        '0px 0px 5px rgb(102, 102, 102)',
        '0px 0px 10px rgb(102, 102, 102)',
        '2px 1px 15px rgb(100, 240, 255)',
        '0px 0px 20px rgb(102, 102, 102)'
      ].join(', ')
    },
    [['97.5%'].join(', ')]: {
      textShadow: [
        '0px -5px 10px rgba(102, 102, 102, 0)',
        '0px 0px 5px rgba(102, 102, 102, 0)',
        '0px 0px 10px rgba(102, 102, 102, 0)',
        '2px 1px 4px rgb(255, 100, 100)',
        '0px 0px 20px rgba(102, 102, 102)'
      ].join(', ')
    }
  },
  e404: {
    position: 'relative',
    fontSize: '220px',
    transform: 'skewX(0deg)',
    textShadow: [
      '0px -5px 10px rgb(102, 102, 102)',
      '0px 0px 5px rgba(102, 102, 102, 0)',
      '0px 0px 10px rgba(102, 102, 102, 0)',
      '0px 0px 15px rgba(102, 102, 102, 0)',
      '0px 0px 20px rgba(102, 102, 102, 0)'
    ].join(', '),
    animation: [
      '$noise 3s infinite linear alternate-reverse',
      '$shift 4s ease-in-out infinite alternate',
      '$blur 8s ease-in-out infinite alternate'
    ].join(', '),
    '&:before': {
      content: 'attr(data-txt)',
      position: 'absolute',
      top: '0',
      left: '1px',
      textShadow: '-3px 0 rgb(0, 255, 255)',
      color: 'transparent',
      clip: 'rect(0, 999px, 0, 0)',
      transform: 'skewX(0deg)',
      opacity: 0.8,
      animation: [
        '$noise 3s infinite linear alternate-reverse'
      ].join(', '),
      overflow: 'hidden',
      zIndex: -1
    },
    '&:after': {
      content: 'attr(data-txt)',
      position: 'absolute',
      top: '0',
      left: '3px',
      color: 'transparent',
      textShadow: '-1px 0 rgb(255, 0, 0)',
      clip: 'rect(0, 999px, 0, 0)',
      transform: 'skewX(0deg)',
      opacity: 0.5,
      animation: [
        '$noise 3s infinite linear alternate-reverse'
      ].join(', '),
      overflow: 'hidden',
      zIndex: -2,
    },
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      fontSize: '160px',
    }
  }
}))
const e404page:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <Grid container direction='column' justify='center' alignItems='center' classes={{container:classes.pageContainer}}>
        <Typography color='textPrimary' className={classes.e404}
          {...{'data-txt':'404'}}
        >
          404
        </Typography>
        <Typography color='textPrimary' align='center' variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}>
          PAGE NOT FOUND
        </Typography>
      </Grid>
    </div>
  )
}

export default e404page