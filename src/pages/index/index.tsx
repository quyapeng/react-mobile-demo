import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";
import { AtButton } from "taro-ui";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary">按钮文案</AtButton>
        <img
          // src={"../../images/about/logo.png"}
          alt=""
          width="100"
          height="100"
        />
      </View>
    );
  }
}
