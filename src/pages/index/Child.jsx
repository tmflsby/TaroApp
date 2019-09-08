import Taro,{Component} from "@tarojs/taro";
import { View, Test, Button } from "@tarojs/components";

class Child extends Component{

    handleClick(){
        this.props.onChange()
    }

    render(){
        return (
            <View>
                <Button onClick={this.handleClick.bind(this)}>调用上层事件</Button>
                {this.props.name}
            </View>
        )
    }
}

export default Child;