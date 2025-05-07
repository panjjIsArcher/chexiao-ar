Component({
  data: {
    visible: false,
  },
  properties: {
    model: {
      type: String,
      value: "default",
    },
    arSystem: { type: String, value: "default" },
    width: Number,
    height: Number,
  },
  methods: {
    handleReady({ detail }) {
      this.scene = detail.value;
      const xrFrameSystem = wx.getXrFrameSystem();
      this.camera = detail.value
        .getElementById("camera")
        .getComponent(xrFrameSystem.Camera);
    },
    handleAssetsLoaded() {
      wx.showToast({ title: "点击屏幕放置" });
      this.scene.event.add("touchstart", () => {
        console.info(" this.scene", this.scene.ar);
        this.setData({ visible: true });
        this.scene.ar.placeHere("setitem", true);
      });
    },
  },
});
