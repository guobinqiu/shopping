"use strict";
const uni_modules_uniUi_components_uniSwipeActionItem_mpwxs = require("./mpwxs.js");
const common_vendor = require("../../../../common/vendor.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("closeSwipe", "change");
};
const _sfc_main = {
  mixins: [uni_modules_uniUi_components_uniSwipeActionItem_mpwxs.mpwxs],
  props: {
    // 控制开关
    show: {
      type: String,
      default: "none"
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否自动关闭
    autoClose: {
      type: Boolean,
      default: true
    },
    // 滑动缺省距离
    threshold: {
      type: Number,
      default: 20
    },
    // 左侧按钮内容
    leftOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    // 右侧按钮内容
    rightOptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  inject: ["swipeaction"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.leftOptions, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.style && item.style.color ? item.style.color : "#FFFFFF",
        c: index,
        d: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD",
        e: item.style && item.style.fontSize ? item.style.fontSize : "16px",
        f: common_vendor.o((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args), index),
        g: common_vendor.o(($event) => _ctx.appTouchEnd($event, index, item, "left"), index)
      };
    }),
    b: _ctx.btn,
    c: common_vendor.f($props.rightOptions, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.style && item.style.color ? item.style.color : "#FFFFFF",
        c: index,
        d: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD",
        e: item.style && item.style.fontSize ? item.style.fontSize : "16px",
        f: common_vendor.o((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args), index),
        g: common_vendor.o(($event) => _ctx.appTouchEnd($event, index, item, "right"), index)
      };
    }),
    d: _ctx.btn,
    e: $props.threshold,
    f: $props.disabled,
    g: _ctx.btn
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dc8df06b"], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/uni_modules/uni-ui/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
wx.createComponent(Component);
