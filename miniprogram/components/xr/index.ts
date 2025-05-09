Component({
  data: {
    visible: false,
    done: false,
    scene: null,
  },
  properties: {
    model: {
      type: String,
      value: "",
    },
    arSystem: { type: String, value: "" },
    width: Number,
    height: Number,
  },
  methods: {
    handleReady({ detail }) {
      this.setData({ scene: detail.value });
      this.handleAssetsLoaded();
    },
    handleAssetsLoaded() {
      if (!this.data.scene) {
        return;
      }
      this.data.scene.event.add("touchstart", () => {
        if (this.data.done) return;
        this.data.scene.ar.placeHere("setitem", true);
        this.setData({ visible: true, done: true });
      });
    },
  },
});
