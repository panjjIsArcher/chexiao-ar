const init = () => {
  wx.createVKSession({ version: "v2", track: {} });
};

export { init };
