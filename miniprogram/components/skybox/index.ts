// components/skybox/index.ts
Component({
  data: { scene: null },
  methods: {
    handleReady({ detail }) {
      this.data.scene = detail.value;
      this.createSphere(detail.value);
    },
    createSphere(scene) {
      const box = scene.createObject({
        type: "sphere",
        radius: 10,
        segments: 64,
        material: { map: "#videoTexture", type: "standard", side: "double" },
      });
      scene.add(box);
      return box;
    },
  },
});
