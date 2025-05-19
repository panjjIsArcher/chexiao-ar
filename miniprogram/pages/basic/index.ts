Page({
  data: {
    renderWidth: 0,
    renderHeight: 0,
    config: {
      shadow: false,
    },
  },
  changeShadow() {
    const shadow = !this.data.config.shadow;
    this.setData({
      config: { ...this.data.config, shadow },
    });
  },
  onLoad() {
    const info = wx.getWindowInfo();
    const { screenHeight, screenWidth } = info;
    this.setData({
      renderWidth: screenWidth,
      renderHeight: screenHeight,
    });
  },
});
