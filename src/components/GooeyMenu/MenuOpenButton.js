import Taro, { Component } from '@tarojs/taro'

function hamburger(isOpen, i) {
  var hamburgerSpacing = 8;
  var width = 25;
  var height = 3;
  var rotateFactor = isOpen ? 45 : 0;
  var rotate = -rotateFactor * i + rotateFactor;
  var scale = isOpen && i === 1 ? 0 : 1;
  var mySpace = isOpen ? 0 : i * hamburgerSpacing - hamburgerSpacing;

  return {
    width: width + "px",
    height: height + "px",
    background: "white",
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -width / 2 + "px",
    marginTop: -height / 2 + "px",
    transition: "transform 200ms",
    transform: `translate3d(0,${mySpace}px,0) scale(${scale}) rotate(${rotate}deg)`
  };
}

export default class MenuOpenButton extends Component {
  state = { hover: false };
  onMouseChange = (isHover) => {
    this.setState({
        hover: isHover,
    })
  }

  onBtnClick = () => {
    this.props.onOpenChanged(!this.props.open);
  }

  render() {
    return (
      <View
        onClick={this.onBtnClick}
        onMouseEnter={this.onMouseChange.bind(this, true)}
        onMouseLeave={this.onMouseChange.bind(this, false)}
        style={{
          background: "#ffc107", //this.props.foregroundColor,
          borderRadius: "100%",
          width: "80px",
          height: "80px",
          display: "block",
          color: "white",
          textAlign: "center",
          lineHeight: "80px",
          transition: "transform ease-out",
          margin: 7,
          zIndex: 2,
          transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
          transitionDuration: "400ms",
          transform: "scale(1.1,1.1) translate3d(0,0,0)",
          cursor: "pointer",
          position: "absolute",
          top: 5
        }}
      >
        {[0, 1, 2].map(i => {
          return <View key={i} style={hamburger(this.props.open, i)} />;
        })}
      </View>
    );
  }
}
