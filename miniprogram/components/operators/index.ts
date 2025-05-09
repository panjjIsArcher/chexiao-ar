Component({
  methods: {
    changeModel(model: string = "") {
      this.triggerEvent("changeModel", model);
    },
  },
});
