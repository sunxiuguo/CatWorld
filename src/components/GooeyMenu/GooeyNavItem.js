import Taro, { Component } from '@tarojs/taro'
import * as menuItemStyle from "./style/menuItem";

export default class GooeyNavItem extends Component {
  state = { hovered: false };

  render() {
    const {
      children,
      component: Component = "a",
      componentProps: { style, ...compProps } = {},
      orientation,
      position: index,
      revealed,
      title
    } = this.props;
    return (
      <Component
        href="#"
        title={title}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        style={{
          ...menuItemStyle.std({ index, orientation }),
          ...(this.state.hovered && menuItemStyle.hover),
          ...(revealed && menuItemStyle.revealed({ index, orientation })),
          ...style
        }}
        {...compProps}
      >
        {children}
      </Component>
    );
  }
}
