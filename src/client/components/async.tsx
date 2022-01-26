import * as React from 'react'
import Box from '@mui/material/Box'

const Async:React.FunctionComponent<AsyncProps<any>> = (props) => {
  const {props:childProps} = props
  const [state, setState] = React.useState<AsyncState>({})
  React.useEffect(() => {
    props.module().then((page) => setState({Component:page.default}))
  }, [])

  const {Component} = state
  return (
    <Box sx={{
      position: 'relative',
      width: '100%'
    }}>
      {Component
        ? <Component {...childProps}/>
        : null
      }
    </Box>
  )
}
type AsyncProps<T> = {
  module: () => Promise<{default:React.FunctionComponent<T>}>
  props: T
}
type AsyncState = {
  Component?: React.FunctionComponent
}

export default Async