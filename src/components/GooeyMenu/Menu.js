import Taro, { Component } from '@tarojs/taro'

import goo from "./style/goo";

import GooeySvg from "./GooeySvg";
import MenuOpenButton from "./MenuOpenButton";
import { Orientation } from "./style/menuItem";
import GooeyNavItem from "./GooeyNavItem";
import { Props as ItemProps } from "./Item";

export default class Menu extends Component {
  static defaultProps = {
    foregroundColor: "#ffc107",
    backgroundColor: "#009688",
    openDistance: "105px",
    openingAngle: Math.PI * 2
  };

  state = { open: false };

  componentDidMount() {
    if (document.querySelector("#gooey-nav-svgs")) return;
    var domNode = GooeySvg({ id: "gooey-nav-svgs" });
    document.body.appendChild(domNode);
  }

  onOpenChanged = (open) => this.setState({ open });

  render() {
    return (
      <nav
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
      </nav>
    );
  }
}
