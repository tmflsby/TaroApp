import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import AddCut from '../addcut/addCut';
import './foodList.less';
class FoodList extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    // console.log(JSON.stringify(this.props.currentList));
    let { selectCata, currentList } = this.props;
    return <View className="foodList">
            <Text>{selectCata ? selectCata.name : ''}</Text>
            <View className="foodList_forList">
                {currentList.map((item, index) => {
          return <View className="foodList_item" key={item.id}>
                            <Image className="foodList_item_img" src={item.img === 2 ? require('../../assets/img/2.jpg') : require('../../assets/img/1.jpg')}></Image>
                            <View className="foodList_item_info">
                                <Text>{item.title}</Text>
                                <Text>月售：{item.sole}</Text>
                                <Text className="price">￥{item.price}</Text>
                                <AddCut food={item}></AddCut>
                            </View>
                        </View>;
        })}
            </View>
        </View>;
  }
}

FoodList.defaultProps = {
  currentList: []
};

export default FoodList;