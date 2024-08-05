"use strict";
const mixins_tabbarBadge = require("../../mixins/tabbar-badge.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_tabbarBadge.badgeMixin],
  computed: {
    ...common_vendor.mapState("m_cart", ["cart"])
  },
  data() {
    return {
      options: [{
        text: "删除",
        style: {
          backgroundColor: "#c00000"
        }
      }]
    };
  },
  methods: {
    ...common_vendor.mapMutations("m_cart", ["updateGoodsState", "updateGoodsCount", "removeGoodsById"]),
    radioChangeHandler(goods) {
      this.updateGoodsState(goods);
    },
    numberChangeHandler(goods) {
      this.updateGoodsCount(goods);
    },
    swipeItemClickHandler(goods) {
      this.removeGoodsById(goods);
    }
  }
};
if (!Array) {
  const _easycom_my_address2 = common_vendor.resolveComponent("my-address");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_my_settle2 = common_vendor.resolveComponent("my-settle");
  (_easycom_my_address2 + _easycom_uni_icons2 + _easycom_my_goods2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_my_settle2)();
}
const _easycom_my_address = () => "../../components/my-address/my-address.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_my_goods = () => "../../components/my-goods/my-goods.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-ui/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-ui/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_my_settle = () => "../../components/my-settle/my-settle.js";
if (!Math) {
  (_easycom_my_address + _easycom_uni_icons + _easycom_my_goods + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_my_settle)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.cart.length !== 0
  }, _ctx.cart.length !== 0 ? {
    b: common_vendor.p({
      type: "shop",
      size: "18"
    }),
    c: common_vendor.f(_ctx.cart, (goods, i, i0) => {
      return {
        a: common_vendor.o($options.radioChangeHandler, i),
        b: common_vendor.o($options.numberChangeHandler, i),
        c: "54f85d21-4-" + i0 + "," + ("54f85d21-3-" + i0),
        d: common_vendor.p({
          goods,
          ["show-radio"]: true,
          ["show-num"]: true
        }),
        e: common_vendor.o(($event) => $options.swipeItemClickHandler(goods), i),
        f: "54f85d21-3-" + i0 + ",54f85d21-2",
        g: i
      };
    }),
    d: common_vendor.p({
      ["right-options"]: $data.options
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
