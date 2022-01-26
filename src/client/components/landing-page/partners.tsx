import * as React from 'react'
import {Transition} from 'react-transition-group'
import {useTheme, Theme, SxProps} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import AirAsiaLogo from '../../../asset/img/partners/air-asia.png'
import AstroLogo from '../../../asset/img/partners/astro.png'
import BoostedStripesLogo from '../../../asset/img/partners/boosted-stripes.png'
import EggNetworkLogo from '../../../asset/img/partners/egg-network.png'
import EKLogo from '../../../asset/img/partners/ek.png'
import FaveLogo from '../../../asset/img/partners/fave.png'
import {useScreenState} from '../../store/screen'
import {useStyles} from '.'

const ImageTransition:React.FunctionComponent<ImageTransitionProps> = ({
  style,
  source
}) => {
  const containerRef = React.useRef<HTMLDivElement>()
  const theme = useTheme()
  const [state, setState] = React.useState<ImageTransitionState>({
    sources: [source]
  })

  React.useEffect(() => {
    if(source !== state.sources[0]) {
      setState(state => ({
        ...state,
        sources: [state.sources[0], source],
        animationCallback: () => {
          setState(state => ({
            ...state,
            sources: [state.sources[1]],
            animationCallback: undefined
          }))
        }
      }))
    }
  }, [source])

  const {sources, animationCallback} = state
  return (
    <Box
      ref={containerRef}
      sx={{
        ...style,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Transition
        in={sources.length === 1}
        addEndListener={undefined as any}
        onExited={animationCallback}
        timeout={theme.transitions.duration.standard}
      >
        {state => (
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: state === 'entered' || state === 'entering'
              ? 'none'
              : theme.transitions.create(['top']),
            top: state === 'entered' || state === 'entering'
              ? '0'
              : '-100%',
            background: `url(${sources[0]}) center/contain no-repeat`
          }}/>
        )}
      </Transition>
      <Transition
        in={sources.length !== 1}
        addEndListener={undefined as any}
        timeout={theme.transitions.duration.standard}
      >
        {state => (
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: state === 'entered' || state === 'entering'
              ? theme.transitions.create(['top'])
              : 'none',
            top: state === 'entered' || state === 'entering'
              ? '0'
              : '100%',
            background: `url(${sources[1]}) center/contain no-repeat`
          }}/>
        )}
      </Transition>
    </Box>
  )
}
type ImageTransitionProps = {
  style: SxProps<Theme>
  source: string
}
type ImageTransitionState = {
  sources: [string] | [string, string]
  animationCallback?: () => void
}

const logos = [
  AirAsiaLogo,
  AstroLogo,
  BoostedStripesLogo,
  EggNetworkLogo,
  EKLogo,
  FaveLogo
]
const PartnersSection:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const columnAmount = screenType === 'xs-phone'
    ? 2
    : screenType === 'sm-tablet' ||
      screenType === 'md-desktop'
    ? 3
    : 4
  
  const getPartners = (amount:number) => {
    let partners:string[] = []
    for(let index = 0; index < amount; index++) {
      const remaining = logos.filter(logo => !partners.includes(logo))
      partners = [
        ...partners,
        remaining[Math.floor(Math.random() * remaining.length)]
      ]
    }
    return partners
  }
  const [state, setState] = React.useState<PartnersSectionState>({
    partners: getPartners(columnAmount)
  })
  React.useEffect(() => {
    setState(state => ({
      ...state,
      partners: getPartners(columnAmount)
    }))
  }, [columnAmount])
  const switchPartner = (partners:string[]) => {
    const position = Math.floor(Math.random() * partners.length)
    return partners.map((partner, index) => {
      if(index === position) {
        const remaining = logos.filter(logo => !partners.includes(logo))
        return remaining[Math.floor(Math.random() * remaining.length)]
      } else {
        return partner
      }
    })
  }
  React.useEffect(() => {
    const timeout = setTimeout(
      () => setState(state => ({
        ...state,
        partners: switchPartner(state.partners)
      })),
      3000
    )
    return () => {
      clearTimeout(timeout)
    }
  }, [state.partners, columnAmount])

  const styles = useStyles(screenType)
  const {partners} = state
  return (
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
          WE WORKED WITH
        </Typography>
        <Typography
          variant={screenType === 'xs-phone'? 'h6':'h5'}
          sx={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
            marginBottom: screenType === 'xs-phone'? '12px':'16px'
          }}
        >
          #PARTNERS
        </Typography>
        <Box sx={{
          display: 'grid',
          columnGap: screenType === 'xs-phone'? '16px':'24px',
          gridTemplateColumns: Array(partners.length)
            .fill('auto')
            .join(' ')
        }}>
          {partners.map((partner, index) => (
            <ImageTransition
              key={index}
              style={{
                height: screenType === 'xs-phone'? '160px':'200px'
              }}
              source={partner}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
type PartnersSectionState = {
  partners: string[]
}

export default PartnersSection