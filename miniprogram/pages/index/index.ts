interface Systems {
  default: string; // 默认系统
  planeMode: string; // 平面识别模式
  face: string; // 面部识别模式
  OSD: string; // One-shot Detection Marker识别
  physics: string; // 物理刚体
  hand: string; // 手势识别模式
}

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
  onShow() {
    this.changeModel({
      detail: { currentTarget: { dataset: { model: "planeMode" } } },
    });
  },
  changeModel(e: {
    detail: { currentTarget: { dataset: { model: string } } };
  }) {
    const model = e?.detail?.currentTarget?.dataset?.model ?? "";
    const arSystem = this.setSystem(model);
    this.setData({ model, arSystem });
  },
  setSystem(model: string): string {
    const systems: Systems = {
      default: "",
      planeMode: "modes:Plane Marker; planeMode: 1",
      face: "modes:Face;camera:Front;",
      OSD: "modes:OSD;",
      physics: "",
      hand: "modes:Hand",
    };
    return systems[model] || "";
  },
});
