// pages/hand/index.ts

Page({
  data: {
    renderWidth: 0,
    renderHeight: 0,
    model: "",
    arSystem: "modes:Plane Marker; planeMode: 1",
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
