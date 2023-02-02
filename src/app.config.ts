import path from "path";

export default {
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  alias: {
    "@/": path.resolve(__dirname, "..", "src/"),
  },
};
