import React, { Component } from 'react';
import {observer} from 'mobx-react'
import includes from 'lodash/includes'

class App extends Component {

  componentDidMount(){
    this.props.windowSizeStore.setWindow()
  }

  render() {
    const {windowSizeStore} = this.props
    const isMobileView = includes(windowSizeStore.windowSizes, 'sm')
    const isMediumView = includes(windowSizeStore.windowSizes, 'm')
    const isLargeView = includes(windowSizeStore.windowSizes, 'l')
    const isExtraLargeView = includes(windowSizeStore.windowSizes, 'xl')
    const isNotSmallView = includes(windowSizeStore.windowSizes, 'ns')
    return (
      <div>
        <p>The window width is: </p>
        {isMobileView && `Mobile!`}
        {isMediumView && `Medium`}
        {isLargeView && `Large`}
        {isExtraLargeView && `Extra Large`}
        {isNotSmallView && `, Not Small`}
      </div>
    );
  }
}

export default observer(App);
