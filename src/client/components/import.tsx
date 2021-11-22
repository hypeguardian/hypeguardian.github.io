import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'

import ExanFont from '../../asset/font/exan.woff'
import MonacoFont from '../../asset/font/monaco.woff'

const useStyles = makeStyles((theme:Theme) => ({
  '@import': [
    'url(https://fonts.googleapis.com/css2?family=Arimo:wght@200;300;400;600;800&display=swap)'
  ] as any,
  '@font-face': [{
    fontFamily: 'Exan',
    src: `url(${ExanFont})`
  }, {
    fontFamily: 'Monaco',
    src: `url(${MonacoFont})`
  }] as any
}))
const Import:React.FunctionComponent = () => {
  const classes = useStyles({})
  return null
}

export default Import