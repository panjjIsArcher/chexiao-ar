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
  changeModel(e: { currentTarget: { dataset: { model: string } } }) {
    this.setData({ model: e.currentTarget.dataset.model });
  },
});
