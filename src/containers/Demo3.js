import React from 'react'
import { hot } from 'react-hot-loader'
import { Header } from 'components'

const Demo = () => {
  return (
    <div className="content-box">
      <Header>demo3</Header>
      <div className="content">
        haha
      </div>
    </div>
  )
}

export default hot(module)(Demo)
