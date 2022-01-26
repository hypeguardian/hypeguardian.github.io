import * as React from 'react'
import {Global, css} from '@emotion/react'

const style = css(`
  @import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap);
`)
const Import:React.FunctionComponent = () => {
  return (
    <Global styles={style}/>
  )
}

export default Import