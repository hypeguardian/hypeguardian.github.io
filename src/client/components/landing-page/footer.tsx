import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import HypeGuardianLogo from '../../../asset/img/hypeguardian-logo.svg'
import FacebookIcon from '../../../asset/img/social-media/facebook.svg'
import InstagramIcon from '../../../asset/img/social-media/instagram.svg'
import {useScreenState} from '../../store/screen'
import {useStyles} from '.'

const FooterSection:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()

  const styles = useStyles(screenType)
  return (
    <Box sx={{
      ...styles.row,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: screenType === 'xs-phone'? '16px':'24px',
      backgroundColor: 'rgb(17, 17, 17)'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: '16px' 
      }}>
        {[{
          icon: FacebookIcon,
          alt: 'Facebook',
          link: 'https://www.facebook.com/hypeguardianmy'
        }, {
          icon: InstagramIcon,
          alt: 'Instagram',
          link: 'https://www.instagram.com/hypeguardianmy'
        }].map(media => (
          <a
            key={media.link}
            href={media.link}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(128, 128, 128, 0.2)'
            }}
          >
            <img
              src={media.icon}
              alt={media.alt}
              style={{
                width: '16px',
                height: '16px',
              }}
            />
          </a>
        ))}
      </Box>
      <Box sx={{
        ...styles.content,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: screenType === 'xs-phone'
          ? '16px'
          : screenType === 'sm-tablet' ||
            screenType === 'md-desktop'
          ? '32px'
          : '48px'
      }}>
        <img
          src={HypeGuardianLogo}
          alt='HypeGuardian'
          style={{
            width: '120px',
            opacity: 0.5,
            marginBottom: screenType === 'xs-phone'? '12px':'16px'
          }}
        />
        <Typography
          variant={'caption'}
          sx={{
            fontFamily: 'Titillium Web',
            color: 'rgb(118, 121, 128)'
          }}
        >
          © 2022 HYPE GUARDIAN SDN. BHD.
        </Typography>
      </Box>
    </Box>
  )
}

export default FooterSection