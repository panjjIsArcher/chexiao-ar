const common = require("../../behavior/index");
Component({
  behaviors: [common],
  properties: {},
  data: { scene: null, loaded: false },
  methods: {
    handleReady({ detail }) {
      this.setData({ scene: detail.value });
      this.handleAssetsLoaded();
    },
    handleAssetsLoaded() {
      this.setData({ loaded: true });
      const el = this.scene.getElementById("tracker");
      this.tracker = el.getComponent(wx.getXrFrameSystem().ARTracker);
      this.gesture = -1;
      console.log(this.tracker, this.gesture);
    },
  },
});
