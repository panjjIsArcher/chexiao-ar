const common = require("../../behavior/index");
Component({
  behaviors: [common],
  properties: {
    model: {
      type: String,
      value: "",
    },
  },
  data: { scene: null, loaded: false },
  methods: {
    handleReady({ detail }) {
      this.data.scene = detail.value;
      this.handleAssetsLoaded();
    },
    handleAssetsLoaded() {
      this.setData({ loaded: true });
      const el = this.data.scene.getElementById("tracker");
      this.tracker = el.getComponent(wx.getXrFrameSystem().ARTracker);
      this.gesture = -1;
    },
  },
});
