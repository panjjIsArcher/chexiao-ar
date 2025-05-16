// components/physics/physics.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    cubes: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleReady({ detail }) {
      const scene = detail.value;
      this.data.scene = scene;
      scene.event.add("touchstart", (e) => {
        const { clientX, clientY } = e.touches[0];
        this.shoot(clientX, clientY, scene);
      });
    },
    beginCollide() {
      if (!this.data.scene) {
        return;
      }
      const plane = this.data.scene.getElementById("plane");
      plane.getComponent("transform").rotation.x = 0;
      plane.getComponent("transform").rotation.y = 0;
      plane.getComponent("transform").rotation.z = 0;
      console.info("plane", plane.getComponent("transform"));
    },
    shoot(clientX, clientY, scene) {
      // 创建ball
      const camera = scene.getElementById("camera");
      const cam_trans = camera.getComponent("transform");
      const { x, y, z } = cam_trans.worldForward;
      const el = scene.createElement(wx.getXrFrameSystem().XRMesh, {
        geometry: "sphere",
        scale: "0.2 0.2 0.2",
        rigidbody: "mass:0.1;disabled:false;useGravity:true",
        "sphere-shape": "autoFit: true",
        "shape-interact": "collide: true; bounciness: 0.5;mass:0.3;",
        position: `${x} ${y} ${z}`,
        uniforms: "u_baseColorFactor:0.8 0.4 0.4 1",
      });
      scene.addChild(el);
    },
  },
});
