Component({
  data: {
    visible: false,
    done: false,
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
      this.scene.event.add("touchstart", () => {
        if (this.data.done) return;
        this.scene.ar.placeHere("setitem", true);
        this.setData({ visible: true, done: true });
      });
    },
  },
});
