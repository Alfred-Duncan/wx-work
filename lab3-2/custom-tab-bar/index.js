const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/6.png",
      selectedIconPath: "/image/6.png",
      text: "",
      isSpecial: false
    }, {
      pagePath: "/pages/add/add",
      iconPath: "/image/2.png",
      selectedIconPath: "/image/2.png",
      text: "",
      isSpecial: true
    }, {
      pagePath: "/pages/logs/logs",
      iconPath: "/image/4.png",
      selectedIconPath: "/image/4.png",
      text: "",
      isSpecial: false
    }],
  },
  attached() {},
  methods: {
    switchTab(e) {
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: path
        })
      } else {
        wx.switchTab({
          url: path
        })
        this.setData({
          selected: index
        })
      }
    }
  }
})