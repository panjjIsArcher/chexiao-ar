const common = require("../../behavior/index");
Component({
  behaviors: [common],
  properties: {
    model: {
      type: String,
      value: "",
    },
  },
  data: { scene: null, loaded: false, rotation: "0 90 0" },
  methods: {
    handleReady({ detail }) {
      const scene = detail.value;
      this.data.scene = scene;
      this.setData({ loaded: true });
    },
    rotateCamera(scene) {},
  },
});
