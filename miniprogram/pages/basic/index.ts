Page({
  data: {
    renderWidth: 0,
    renderHeight: 0,
    config: {
      shadow: false,
      material: false,
    },
    material: "",
  },
  changeShadow() {
    const shadow = !this.data.config.shadow;
    this.setData({
      config: { ...this.data.config, shadow, material: false },
      material: "",
    });
  },
  changeMaterial(e: { target: { dataset: { material: string } } }) {
    const material = e.target.dataset.material;
    this.setData({
      config: {
        ...this.data.config,
        material: material ? true : !this.data.config.material,
      },
      material: material || "",
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
