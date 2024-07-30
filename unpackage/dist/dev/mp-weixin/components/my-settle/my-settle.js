"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-settle",
  data() {
    return {};
  },
  computed: {
    ...common_vendor.mapGetters("m_cart", ["checkedCount", "total"]),
    isFullChecked() {
      return this.checkedCount === this.total;
    }
  },
  methods: {
    ...common_vendor.mapMutations("m_cart", ["updateAllGoodsState"]),
    changeAllState() {
      this.updateAllGoodsState(!this.isFullChecked);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.isFullChecked,
    b: common_vendor.o((...args) => $options.changeAllState && $options.changeAllState(...args)),
    c: common_vendor.t(_ctx.checkedCount)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/components/my-settle/my-settle.vue"]]);
wx.createComponent(Component);
