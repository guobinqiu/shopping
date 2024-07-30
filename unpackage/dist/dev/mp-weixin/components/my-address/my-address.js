"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-address",
  data() {
    return {
      //address: {},
    };
  },
  methods: {
    ...common_vendor.mapMutations("m_user", ["updateAddress"]),
    async chooseAddress() {
      const result = await common_vendor.index.chooseAddress();
      if (result.errMsg === "chooseAddress:ok") {
        console.log(result);
        this.updateAddress(result);
      }
    }
  },
  computed: {
    ...common_vendor.mapState("m_user", ["address"]),
    ...common_vendor.mapGetters("m_user", ["addstr"])
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: JSON.stringify(_ctx.address) === "{}"
  }, JSON.stringify(_ctx.address) === "{}" ? {
    b: common_vendor.o((...args) => $options.chooseAddress && $options.chooseAddress(...args))
  } : {
    c: common_vendor.t(_ctx.address.userName),
    d: common_vendor.t(_ctx.address.telNumber),
    e: common_vendor.p({
      type: "arrowright",
      size: "16"
    }),
    f: common_vendor.t(_ctx.addstr),
    g: common_vendor.o((...args) => $options.chooseAddress && $options.chooseAddress(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/components/my-address/my-address.vue"]]);
wx.createComponent(Component);
