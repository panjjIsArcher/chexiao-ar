const common = require("../../behavior/index");
Component({
  behaviors: [common],
  properties: {
    body: { type: String, value: "" },
  },
  data: { scene: null, loaded: false },
  methods: {
    handleReady({ detail }) {
      this.data.scene = detail.value;
    },
  },
});
