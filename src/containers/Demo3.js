import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect, Header } from 'components'
import { newsActions } from 'actions/news'

class Demo extends Component {
  static propTypes = {
    onNewsActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
    const { onNewsActions } = this.props
    onNewsActions.fetchNewsList()
  }

  render () {
    return (
      <div className="content-box">
        <Header>demo3</Header>
        <div className="content">
          haha
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onNewsActions: bindActionCreators(newsActions, dispatch),
})

export default connect(null, mapDispatchToProps)(module)(Demo)
