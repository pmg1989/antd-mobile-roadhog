import React from 'react'
import { compose } from 'redux'
// import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import PropTypes from 'prop-types'
import { Header } from 'components'
import { hocForm, InputItem, hocDebug, stringify } from 'components/Hoc-form'


class Demo2 extends React.Component {
  static propTypes = {
    fields: PropTypes.func.isRequired,
    getFields: PropTypes.func.isRequired,
  }

  componentDidMount () {
    console.log(this.props)
  }

  submit (e) {
    e.preventDefault()
    console.log(this.props.getFields())
  }

  render () {
    const { fields } = this.props

    return (
      <div className="content-box">
        <Header>demo2</Header>
        <div className="content">
          <h4>Wrapped Component</h4>
          <p>Props fields</p>
          <pre>{stringify(this.props.getFields())}</pre>
          <form>
            <InputItem label="name" {...fields('name')} />
            <InputItem label="email" {...fields('email', {
              initialValue: '972401854@qq.com',
            })}
            />
            <InputItem label="phone" {...fields('phone')} />
            <Button type="primary" onClick={::this.submit}>submit</Button>
          </form>
        </div>
      </div >
    )
  }
}

export default compose(
  // 单参数的高阶组件
  // connect(),
  hocDebug,
  hocForm,
)(Demo2)
