const localStorage = {
  // 设置
  settings: {
    lang: "zh-CN", // 默认语言
    sidebar: true, // 侧边栏隐藏
    logoIcon: true, // login
    appearance: "auto", // 主题
    isCollapse: false, // 侧边栏是否折叠
  },
  // 用户信息
  data: {
    user: null,
    token: null,
    elTag: [],
    Routingtable: null, // 路由表
  },
};

export default localStorage;
