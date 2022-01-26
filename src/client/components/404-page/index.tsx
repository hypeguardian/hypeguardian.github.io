import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import {useScreenState} from '../../store/screen'

const e404page:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()

  React.useEffect(() => {
    document.body.style.backgroundColor = 'rgb(225, 232, 236)'
  }, [])

  return (
    <Box sx={{
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Grid
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        sx={theme => ({
          padding: '32px',
          [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
            padding: '24px',
          }
        })}
      >
        <Typography
          color='textPrimary'
          {...{'data-txt':'404'}}
          sx={theme => ({
            fontFamily: 'Bebas Neue',
            fontWeight: 400,
            fontSize: '220px',
            lineHeight: 1,
            [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
              fontSize: '160px',
            }
          })}
        >
          404
        </Typography>
        <Typography
          color='textPrimary'
          variant={['xs-phone', 'sm-tablet'].includes(screenType)? 'h5':'h4'}
          sx={{
            fontFamily: 'Titillium Web',
            fontWeight: 700
          }}
        >
          #PAGENOTFOUND
        </Typography>
      </Grid>
    </Box>
  )
}

export default e404page