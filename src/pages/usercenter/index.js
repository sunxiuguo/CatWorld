import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabBar, AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
export default class Usercenter extends Component {

    componentWillReceiveProps (nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    onClickTabBar = (value) => {
        console.log(value)
        // Taro.navigateTo({
        //     url,
        // })
    }

    render () {
        return (
        <View className='index'>
            我的
        </View>
        )
    }
}
