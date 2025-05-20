Component({
  properties: {
    config: {
      type: Object,
      value: () => {},
    },
    material: {
      type: String,
      value: "",
    },
    process: {
      type: String,
      value: "",
    },
  },
  observers: {
    process(process) {
      this.setData({ postProcess: process });
    },
    material(material) {
      if (material === "video") {
        this.setData({ materialName: `u_baseColorMap: ${material}` });
        this.setData({ background: "skybox" });
      } else if (material === "") {
        this.setData({ materialName: "u_baseColorFactor:1 1 1" });
        this.setData({ background: "default" });
        this.data.isPlay = true;
        this.play();
      } else {
        this.setData({ materialName: `u_baseColorMap: ${material}` });
        this.setData({ background: "default" });
        this.data.isPlay = true;
        this.play();
      }
    },
  },
  data: {
    materialName: "",
    background: "default",
    scene: null,
    isPlay: false,
    postProcess: "",
  },
  methods: {
    handleReady({ detail }) {
      this.data.scene = detail.value;
    },
    play() {
      if (!this.data.scene) return;
      const video = this.data.scene.assets.getAsset("video-texture", "cat");

      if (!video) {
        return;
      }
      const isPlay = this.data.isPlay;
      this.setData({ isPlay: !isPlay });
      if (isPlay) {
        video.pause();
      } else {
        video.play();
      }
    },
  },
});
