import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less';
import Head from '../../components/head/head';
import Food from '../../components/food/food';
import Bottom from '../../components/bottom/bottom';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>
          <Head></Head>
          <Food></Food>
          <Bottom></Bottom>
        </Text>
      </View>
    )
  }
}
