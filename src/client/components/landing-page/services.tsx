import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import CleaningImage from '../../../asset/img/services/cleaning.jpg'
import ProtectionImage from '../../../asset/img/services/protection.jpg'
import RestorationImage from '../../../asset/img/services/restoration.jpg'
import CustomisationImage from '../../../asset/img/services/customisation.jpg'
import {useScreenState} from '../../store/screen'
import {useStyles} from '.'

const ServicesSection:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()

  const styles = useStyles(screenType)
  return (
    <Box sx={{
      ...styles.row,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgb(17, 17, 17)'
    }}>
      {[{
        image: CleaningImage,
        title: 'CLEANING',
        tag: 'RIDOFFILTH',
        description: 'Your dirty shoes deserves a second chance. We have all the tools necessary to make sure your shoes are sparkly clean, a second chance it deserves.'
      }, {
        image: ProtectionImage,
        title: 'PROTECTION',
        tag: 'EXTRAARMOUR',
        description: 'Give your cleaned/new shoes protections, so that it can stay that way. Wear and tear are unavoidable, but with some extra protection, you might be able to sell it at a higher price in the future.'
      }, {
        image: RestorationImage,
        title: 'RESTORATION',
        tag: 'BACKTONEW',
        description: 'Some stains can diffused into your shoes and can no longer be removed. Since the filth can’t be rid of, we will have to give it a new layer of paint.'
      }, {
        image: CustomisationImage,
        title: 'CUSTOMISATION',
        tag: 'UNIQUELYYOURS',
        description: 'Do you want a shoe that is unique or do you think a special someone deserves something special. Doesn’t matter you have a design in mind, we’ve got you covered.'
      }].map((service, index) => (
        <Box
          key={service.title}
          sx={{
            ...styles.content,
            display: 'flex',
            flexDirection: screenType === 'xs-phone'
              ? 'column'
              : index % 2 === 0? 'row-reverse':'row',
            alignItems: 'center',
            gap: screenType === 'xs-phone'? '32px':'48px'
          }}
        >
          <Box sx={{
            flex: 1
          }}>
            <Typography
              variant={screenType === 'xs-phone'? 'h3':'h1'}
              sx={{
                fontFamily: 'Bebas Neue',
                fontWeight: 400,
                wordBreak: 'break-word',
                color: 'rgb(225, 232, 236)',
                lineHeight: 1,
                marginBottom: screenType === 'xs-phone'? '4px':'6px'
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant={screenType === 'xs-phone'? 'h6':'h5'}
              sx={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                color: 'rgb(225, 232, 236)',
                marginBottom: screenType === 'xs-phone'? '12px':'16px'
              }}
            >
              #{service.tag}
            </Typography>
            <Typography
              variant={screenType === 'xs-phone'? 'body1':'h6'}
              sx={{
                fontFamily: 'Titillium Web',
                color: 'rgb(128, 135, 138)'
              }}
            >
              {service.description}
            </Typography>
          </Box>
          <div style={{
            background: `url(${service.image}) center/cover no-repeat`,
            height: '270px',
            maxWidth: screenType === 'xs-phone'
              ? '100%'
              : 'calc(50% - 56px)',
            width: screenType === 'xs-phone'
              ? '100%'
              : '360px'
          }}/>
        </Box>
      ))}
    </Box>
  )
}

export default ServicesSection