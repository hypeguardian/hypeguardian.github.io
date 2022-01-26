import * as React from 'react'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import PlayIcon from '@mui/icons-material/PlayArrowRounded'
import PauseIcon from '@mui/icons-material/PauseRounded'

import HypeGuardianLogo from '../../../asset/img/hypeguardian-text-logo.svg'
import HypeGuardianVideo from '../../../asset/vid/hypeguardian.mp4'
import {useScreenState} from '../../store/screen'

const HeroSection:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const [state, setState] = React.useState<HeroSectionState>({
    heroSource: typeof MediaSource !== 'undefined'
      ? new MediaSource()
      : undefined,
    playState: 'loading'
  })
  const videoRef = React.useRef<HTMLVideoElement>()

  const downloadVideo = async() => {
    const {heroSource} = state
    if(heroSource) {
      videoRef.current.src = URL.createObjectURL(heroSource)
      await new Promise(resolve => heroSource.addEventListener('sourceopen', resolve))
      const videoBuffer = heroSource.addSourceBuffer('video/mp4; codecs="avc1.640028"')
      const response = await fetch(HypeGuardianVideo)
      const buffers = await response.arrayBuffer()
      videoBuffer.appendBuffer(buffers)
      await new Promise(resolve => videoBuffer.addEventListener('updateend', resolve))
      heroSource.endOfStream()
    }
  }
  React.useEffect(() => {
    const startVideo = async() => {
      await downloadVideo()
      setState(state => ({
        ...state,
        playState: state.heroSource
          ? 'playing'
          : 'loading'
      }))
    }
    document.body.style.backgroundColor = 'rgb(17, 17, 17)'
    startVideo()
  }, [])
  React.useEffect(() => {
    if(state.playState === 'paused') {
      videoRef.current.pause()
    } else if(state.playState === 'playing') {
      videoRef.current.play()
    }
  }, [state.playState])

  const pauseResumeVideo = () => {
    if(videoRef.current.ended || videoRef.current.paused) {
      setState(state => ({
        ...state,
        playState: 'playing'
      }))
    } else {
      setState(state => ({
        ...state,
        playState: 'paused'
      }))
    }
  }
  const onVideoEnded = () => {
    setState(state => ({
      ...state,
      playState: 'stopped'
    }))
  }

  const {playState} = state
  return (
    <Box
      onClick={playState !== 'loading'? pauseResumeVideo:undefined}
      sx={{
        position: 'relative',
        width: '100vw',
        height: screenType === 'xs-phone'? '480px':'640px',
        cursor: playState !== 'loading'? 'pointer':'default'
      }}
    >
      <video
        ref={videoRef}
        playsInline
        muted
        onEnded={onVideoEnded}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {[, {
        state: 'loading',
        background: 'rgba(60, 177, 229, 1)',
        icon: undefined
      }, {
        state: 'stopped',
        background: 'rgba(60, 177, 229, 1)',
        icon: PlayIcon
      }, {
        state: 'paused',
        background: 'rgba(60, 177, 229, 0.3)',
        icon: PauseIcon
      }].map(screen => (
        <Fade
          key={screen.state}
          in={playState === screen.state}
        >
          <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: '32px',
            backgroundColor: screen.background
          }}>
            <img
              src={HypeGuardianLogo}
              style={{
                width: screenType === 'xs-phone'? '280px':'360px'
              }}
            />
            <Box sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: screen.icon
                ? '3px solid rgba(0, 0, 0, 0.87)'
                : 'none',
              borderRadius: '32px'
            }}>
              {screen.icon? (
                <screen.icon sx={{
                  fontSize: '32px'
                }}/>
              ):undefined}
            </Box>
          </Box>
        </Fade>
      ))}
    </Box>
  )
}
type HeroSectionState = {
  heroSource?: MediaSource
  playState: 'loading' | 'playing' | 'paused' | 'stopped'
}

export default HeroSection