const common = require("../../behavior/index");
Component({
  behaviors: [common],
  properties: {},
  data: { scene: null },
  methods: {
    handleReady({ detail }) {
      this.setData({ scene: detail.value });
    },
  },
});
