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
  },
  observers: {
    material(material) {
      material
        ? this.setData({ materialName: `u_baseColorMap: ${material}` })
        : this.setData({ materialName: "u_baseColorFactor:1 1 1" });
    },
  },
  data: {
    materialName: "",
  },
});
