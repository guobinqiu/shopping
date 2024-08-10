"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-userinfo",
  data() {
    return {};
  },
  computed: {
    ...common_vendor.mapState("m_user", ["userinfo"])
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.userinfo.avatarUrl,
    b: common_vendor.t(_ctx.userinfo.nickName)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/components/my-userinfo/my-userinfo.vue"]]);
wx.createComponent(Component);
