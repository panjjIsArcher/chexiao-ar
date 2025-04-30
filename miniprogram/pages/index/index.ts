Page({
  data: {
    renderWidth: 0,
    renderHeight: 0,
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
