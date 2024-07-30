"use strict";
const common_vendor = require("../../common/vendor.js");
const mixins_tabbarBadge = require("../../mixins/tabbar-badge.js");
const _sfc_main = {
  mixins: [mixins_tabbarBadge.badgeMixin],
  data() {
    return {
      wh: 0,
      cateList: [],
      active: 0,
      cateLevel2: []
      //scrollTop: 0,
    };
  },
  onLoad() {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    console.log(sysInfo);
    this.wh = sysInfo.windowHeight - 50;
    this.getCateList();
  },
  methods: {
    async getCateList() {
      const {
        data: res
      } = await common_vendor.index.$http.get("/api/public/v1/categories");
      console.log(res);
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      this.cateList = res.message;
      this.cateLevel2 = res.message[0].children;
    },
    activeChanged(i) {
      this.active = i;
      this.cateLevel2 = this.cateList[i].children;
      this.scrollTop = this.scrollTop === 0 ? 1 : 0;
    },
    gotoGoodsList(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_list/goods_list?cid=" + item.cat_id
      });
    },
    //子传父
    gotoSearch() {
      common_vendor.index.navigateTo({
        url: "/subpkg/search/search"
      });
    }
  }
};
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  _easycom_my_search2();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
if (!Math) {
  _easycom_my_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.gotoSearch),
    b: common_vendor.f($data.cateList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.n(i === $data.active ? "active" : ""),
        c: common_vendor.o(($event) => $options.activeChanged(i), i),
        d: i
      };
    }),
    c: $data.wh + "px",
    d: common_vendor.f($data.cateLevel2, (item2, i2, i0) => {
      return {
        a: common_vendor.t(item2.cat_name),
        b: common_vendor.f(item2.children, (item3, i3, i1) => {
          return {
            a: item3.cat_icon.replace("api-ugo-dev.itheima.net", "api-hmugo-web.itheima.net"),
            b: common_vendor.t(item3.cat_name),
            c: i3,
            d: common_vendor.o(($event) => $options.gotoGoodsList(item3), i3)
          };
        }),
        c: i2
      };
    }),
    e: $data.wh + "px",
    f: _ctx.scrollTop
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
