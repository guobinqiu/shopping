"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uniIcons = () => "../uni-icons/uni-icons.js";
const _sfc_main = {
  name: "UniGoodsNav",
  components: {
    uniIcons
  },
  props: {
    options: {
      type: Array,
      default() {
        return [{
          icon: "shop",
          text: "店铺"
        }, {
          icon: "cart",
          text: "购物车"
        }];
      }
    },
    buttonGroup: {
      type: Array,
      default() {
        return [
          {
            text: "加入购物车",
            backgroundColor: "#ffa200",
            color: "#fff"
          },
          {
            text: "立即购买",
            backgroundColor: "#ff0000",
            color: "#fff"
          }
        ];
      }
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(index, item) {
      this.$emit("click", {
        index,
        content: item
      });
    },
    buttonClick(index, item) {
      if (common_vendor.index.report) {
        common_vendor.index.report(item.text, item.text);
      }
      this.$emit("buttonClick", {
        index,
        content: item
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.options, (item, index, i0) => {
      return common_vendor.e({
        a: "a416fc4c-0-" + i0,
        b: common_vendor.p({
          type: item.icon,
          size: "20",
          color: "#646566"
        }),
        c: common_vendor.t(item.text),
        d: item.info
      }, item.info ? {
        e: common_vendor.t(item.info),
        f: item.info > 9 ? 1 : "",
        g: item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
        h: item.infoColor ? item.infoColor : "#fff"
      } : {}, {
        i: index,
        j: common_vendor.o(($event) => $options.onClick(index, item), index)
      });
    }),
    b: common_vendor.f($props.buttonGroup, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.color,
        c: index,
        d: item.backgroundColor,
        e: item.color,
        f: common_vendor.o(($event) => $options.buttonClick(index, item), index)
      };
    }),
    c: $props.fill ? 1 : ""
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a416fc4c"], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/uni_modules/uni-ui/components/uni-goods-nav/uni-goods-nav.vue"]]);
wx.createComponent(Component);
