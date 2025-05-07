interface Systems {
  default: string; // 默认系统
  planeMode: string; // 平面识别模式
  face: string; // 面部识别模式
  OSD: string; // One-shot Detection Marker识别
  physics: string; // 物理刚体
}

Page({
  data: {
    renderWidth: 0,
    renderHeight: 0,
    model: "default",
    arSystem:
      "modes:Plane; planeMode: 1; depthMask: true; depthNear: 0.1; depthFar: 100; depthDebug: true;",
  },

  onLoad() {
    const info = wx.getWindowInfo();
    const { screenHeight, screenWidth } = info;
    this.setData({
      renderWidth: screenWidth,
      renderHeight: screenHeight,
    });
  },
  changeModel(e: {
    detail: { currentTarget: { dataset: { model: string } } };
  }) {
    const model = e?.detail?.currentTarget?.dataset?.model ?? "default";
    const arSystem = this.setSystem(model);
    console.info(arSystem, model);
    this.setData({ model, arSystem });
  },
  setSystem(model: string): string {
    const systems: Systems = {
      default: "default",
      planeMode:
        "modes:Plane; planeMode: 1; depthMask: true; depthNear: 0.1; depthFar: 100; depthDebug: true;",
      face: "modes:Face;camera:Front;",
      OSD: "modes:OSD;",
      physics: "",
    };
    return systems[model] || "";
  },
});
