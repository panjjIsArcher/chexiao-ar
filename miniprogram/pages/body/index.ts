Page({
  data: {
    renderWidth: 0,
    renderHeight: 0,
    arSystem: "modes:Plane Marker; planeMode: 1",
    body: "",
  },
  onLoad() {
    const info = wx.getWindowInfo();
    const { screenHeight, screenWidth } = info;
    this.setData({
      renderWidth: screenWidth,
      renderHeight: screenHeight,
    });
  },
  changeBody(e: { currentTarget: { dataset: { body: any } } }) {
    this.setData({ body: e.currentTarget.dataset.body });
  },
});
