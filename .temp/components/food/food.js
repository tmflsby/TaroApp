import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Cata from './cata';
import FoodList from './foodList';
import './food.less';

class Food extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }],
      foodList: [],
      currentList: [],
      selectCata: null
    };
  }

  changeTab(value) {
    this.setState({ current: value });
  }

  //切换分类
  changeCata(selectCata) {
    this.setState({ selectCata: selectCata });
    if (this.state.foodList.some(item => item.pid === selectCata.id)) {
      //不用加载数据
      this.setState({ currentList: this.state.foodList.filter(item => item.pid === selectCata.id) });
    } else {
      //需要加载数据
      this.setState({ foodList: this.state.foodList.concat(this.getData(selectCata)) }, () => {
        this.setState({ currentList: this.state.foodList.filter(item => item.pid === selectCata.id) });
      });
    }
  }

  //模拟数据
  getData(selectCata) {
    let count = Math.floor(Math.random() * 2 + 1);
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({ price: Math.round(Math.random() * 20), sole: Math.round(Math.random() * 50), img: count, pid: selectCata.id, id: selectCata.id + '_' + k, title: '分类' + selectCata.id + '\xa0' + '菜品' + (k + 1) }));
  }

  render() {
    let { current, tabList, currentList, selectCata } = this.state;
    return <View>
            <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList}>
                <AtTabsPane>
                    <View className="food_body">
                        <Cata onChangeCata={this.changeCata.bind(this)}></Cata>
                        <FoodList style="width:100%" selectCata={selectCata} currentList={currentList}></FoodList>
                    </View>
                </AtTabsPane>
                <AtTabsPane>评价</AtTabsPane>
                <AtTabsPane>商家</AtTabsPane>
            </AtTabs>
        </View>;
  }
}
export default Food;