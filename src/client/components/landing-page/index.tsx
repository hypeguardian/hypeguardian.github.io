import * as React from 'react'
import {Theme, SxProps} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import {useScreenState, ScreenType} from '../../store/screen'
import HeroSection from './hero'
import ServicesSection from './services'
import PartnersSection from './partners'
import FooterSection from './footer'

export const useStyles = (screenType:ScreenType) => ({
  row: {
    position: 'relative',
    maxWidth: '100%',
    padding: [
      screenType === 'xs-phone'
        ? '32px'
        : screenType === 'sm-tablet' ||
          screenType === 'md-desktop'
        ? '48px'
        : '64px',
      '0'
    ].join(' ')
  },
  content: {
    position: 'relative',
    maxWidth: '100%',
    width: screenType === 'xs-phone' ||
      screenType === 'sm-tablet' ||
      screenType === 'md-desktop'
      ? '840px'
      : '1040px',
    padding: [
      screenType === 'xs-phone'
        ? '24px'
        : screenType === 'sm-tablet' ||
          screenType === 'md-desktop'
        ? '48px'
        : '64px',
      screenType === 'xs-phone'
        ? '16px'
        : screenType === 'sm-tablet' ||
          screenType === 'md-desktop'
        ? '32px'
        : '48px'
    ].join(' ')
  }
}) as Record<'row' | 'content', SxProps<Theme>>
const LandingPage:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()

  const styles = useStyles(screenType)
  return (
    <Box sx={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      backgroundColor: 'rgb(225, 232, 236)'
    }}>
      <HeroSection/>
      <Box sx={styles.row}>
        <Box sx={styles.content}>
          <Typography
            variant={screenType === 'xs-phone'? 'h3':'h1'}
            sx={{
              fontFamily: 'Bebas Neue',
              fontWeight: 400,
              lineHeight: 1,
              marginBottom: screenType === 'xs-phone'? '4px':'6px'
            }}
          >
            WE'RE HYPEGUARDIAN
          </Typography>
          <Typography
            variant={screenType === 'xs-phone'? 'h6':'h5'}
            sx={{
              fontFamily: 'Titillium Web',
              fontWeight: 700,
              marginBottom: screenType === 'xs-phone'? '12px':'16px'
            }}
          >
            #DEFYTHENORM
          </Typography>
          <Typography
            variant={screenType === 'xs-phone'? 'body1':'h6'}
            sx={{
              fontFamily: 'Titillium Web',
              color: 'rgb(118, 121, 128)'
            }}
          >
            We believe life is too short to wear dirty or shitty shoes.
            You can put yourself in someone else's shoes, but don't let someone else decide what shoes you should wear.
          </Typography>
        </Box>
      </Box>
      <ServicesSection/>
      <PartnersSection/>
      <FooterSection/>
    </Box>
  )
}

export default LandingPage