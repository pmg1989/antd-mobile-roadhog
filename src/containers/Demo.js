import React from 'react'
// import PropTypes from 'prop-types'
import { connect, Header, Icon } from 'components'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
import styles from './Demo.less'

const Demo = () => {
  return (
    <div className="content-box">
      <Header>todo mvc hahahahaha</Header>
      <div className="content">
        <WingBlank>
          <div className={styles.box}>
            <span className={styles.title}>
              <Icon type="check-circle-o" />
              i am demo title
            </span>
          </div>
          <div className={styles.box}>
            <span>i am demo 1</span>
            <span>i am demo 2</span>
          </div>
          <Button type="primary" disabled>
            <Icon type={require('svg/loading.svg')} /> default disabled
          </Button><WhiteSpace />
          <Button type="primary">primary</Button><WhiteSpace />
          <Button type="warning">warning</Button><WhiteSpace />
          <Button loading>loading button</Button><WhiteSpace />
          <Button icon="check-circle-o">with icon</Button><WhiteSpace />
          <Button icon={<Icon type={require('svg/loading.svg')} />}>with svg icon</Button><WhiteSpace />
          <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
        </WingBlank>
      </div>
    </div>
  )
}

export default connect()(module)(Demo)
