import Taro, { Component } from '@tarojs/taro'
import * as menuItemStyle from "./style/menuItem";

export default class GooeyNavItem extends Component {
  state = { hovered: false };

  onMouseChange = (isHover) => {
    this.setState({
        hovered: isHover,
    })
  }

  render() {
    const {
      children,
      component: Component = "a",
      componentProps: { style } = {},
    //   componentProps: { style, ...compProps } = {},
      orientation,
      position: index,
      revealed,
      title
    } = this.props;
    return (
      <View
        href="#"
        title={title}
        onMouseEnter={this.onMouseChange.bind(this, true)}
        onMouseLeave={this.onMouseChange.bind(this, false)}
        style={{
          ...menuItemStyle.std({ index, orientation }),
          ...(this.state.hovered && menuItemStyle.hover),
          ...(revealed && menuItemStyle.revealed({ index, orientation })),
          ...style
        }}
        // {...compProps}
      >
        {children}
      </View>
    );
  }
}
