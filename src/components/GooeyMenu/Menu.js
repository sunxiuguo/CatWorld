import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MenuOpenButton from "./MenuOpenButton";
import GooeyNavItem from "./GooeyNavItem";
import goo from "./style/goo";


export default class GooeyMenu extends Component {

    state = { open: false };

    onOpenChanged = (open) => {
        this.setState({ open });
    }

    componentWillReceiveProps (nextProps) {
        // console.log(this.props, nextProps)
    }

    render() {
        return (
        <View
            style={{
                ...goo,
                position: "absolute",
                boxSizing: "border-box",
                fontSize: "20px",
                textAlign: "left",
                padding: 5,
                paddingBottom: 81
            }}
        >
            {this.props.children
            .concat([])
            .map((element, i) => (
                <GooeyNavItem
                    key={i}
                    orientation={this.props.orientation || "bottom"}
                    revealed={this.state.open}
                    position={i + 1}
                    title={element.props.title}
                    children={element.props.children}
                    component={element.props.component}
                    componentProps={element.props.componentProps}
                />
            ))}
            <MenuOpenButton open={this.state.open} onOpenChanged={this.onOpenChanged} />
        </View>
        );
    }
}

GooeyMenu.defaultProps = {
    foregroundColor: "#ffc107",
    backgroundColor: "#009688",
    openDistance: "105px",
    openingAngle: Math.PI * 2
};
