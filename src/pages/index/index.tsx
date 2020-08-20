import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  componentDidMount() {
    console.log(Taro.env, "没有输出env");
  }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
