Page({
  data: {
    renderWidth: 0,
    renderHeight: 0,
    config: {
      shadow: false,
      material: false,
      env: false,
      process: false,
    },
    material: "",
    process: "",
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
        process: false,
      },
      material: material || "",
    });
  },
  changeEnv() {
    const env = !this.data.config.env;
    this.setData({
      config: { ...this.data.config, env },
    });
  },
  changeProcess(e: { target: { dataset: { process: string } } }) {
    const process = e.target.dataset.process;
    this.setData({
      process,
      material: "",
      config: {
        ...this.data.config,
        process: true,
        material: false,
      },
    });
  },
  onLoad() {
    const info = wx.getWindowInfo();
    const { screenHeight, screenWidth } = info;
    this.setData({ renderWidth: screenWidth, renderHeight: screenHeight });
  },
});
