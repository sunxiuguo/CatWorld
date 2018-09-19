import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabBar, AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from '@tarojs/redux'
import Community from '../community/index'
import Keeppet from '../keeppet/index'
import Usercenter from '../usercenter/index'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

const route = [
    '/pages/index/index',
    '/pages/keeppet/index',
    '/pages/usercenter/index',
]

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
export default class Index extends Component {

    state = {
        current: 0,
    }

    config = {
        navigationBarTitleText: '爱猫之城',
    }

    componentWillReceiveProps (nextProps) {
        console.log(this.props, nextProps)
    }

    onClickTabBar = (index) => {
        this.setState({
            current: index,
        })
    }

    render () {
        return (
        <View className='index'>
            {
                this.state.current === 0 ? <Community/> :
                this.state.current === 1 ? <Keeppet/> : <Usercenter/>
            }
            <AtTabBar
                fixed
                tabList={[
                    { title: '社区', iconType: 'home', text: 'new' },
                    { title: '养宠', iconType: 'shopping-bag-2' },
                    { title: '我的', iconType: 'user', text: '100', max: '99' }
                ]}
                onClick={this.onClickTabBar}
                current={this.state.current}
            />
        </View>
        )
    }
}
