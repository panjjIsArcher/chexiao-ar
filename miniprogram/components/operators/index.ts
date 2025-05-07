Component({
  methods: {
    changeModel(model: string = "default") {
      this.triggerEvent("changeModel", model);
    },
  },
});
