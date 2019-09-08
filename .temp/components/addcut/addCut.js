import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { getFoodCount, setFoodCount, getEvent } from '../../utils/common';
const myEvent = getEvent();
import './addCut.less';

class AddCut extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      num: 0
    };
  }

  componentDidMount() {
    this.setState({ num: getFoodCount(this.props.food) });
    myEvent.on('changeCata', () => {
      //监听到分类改变 进行菜品数量刷新
      this.setState({ num: getFoodCount(this.props.food) });
    });
  }

  cutFood() {
    if (this.props.food) {
      if (this.state.num > 0) {
        setFoodCount(this.props.food, this.state.num, 'cut', () => {
          this.setState({ num: getFoodCount(this.props.food) });
          myEvent.emit('addCut');
        });
      } else {
        alert('当前加减菜品出现异常');
      }
    }
  }

  addFood() {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.num, 'add', () => {
        this.setState({ num: getFoodCount(this.props.food) });
        myEvent.emit('addCut');
      });
    }
  }

  render() {
    let { num } = this.state;
    let hideClass = num > 0 ? '' : 'hide';
    // console.log(num, hideClass);
    return <View className="addcut">
            <Image onClick={this.cutFood.bind(this)} className={`opeate_img ${hideClass}`} src={require('../../assets/img/cut.png')}></Image>
            <Text className={`food_num ${hideClass}`}>{num}</Text>
            <Image onClick={this.addFood.bind(this)} className="opeate_img" src={require('../../assets/img/add.png')}></Image>
        </View>;
  }
}
export default AddCut;