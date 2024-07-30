"use strict";
const common_vendor = require("../../common/vendor.js");
const mixins_tabbarBadge = require("../../mixins/tabbar-badge.js");
const _sfc_main = {
  mixins: [mixins_tabbarBadge.badgeMixin],
  components: {},
  data() {
    return {
      swiperList: [],
      navList: [],
      floorList: []
    };
  },
  onLoad() {
    this.getSwiperList();
    this.getNavList();
    this.getFloorList();
  },
  methods: {
    async getSwiperList() {
      const {
        data: res
        //解构出data属性,重命名为res
      } = await common_vendor.index.$http.get("/api/public/v1/home/swiperdata");
      console.log(res);
      if (res.meta.status !== 200) {
        return common_vendor.index.$showMsg();
      }
      this.swiperList = res.message;
    },
    async getNavList() {
      const {
        data: res
      } = await common_vendor.index.$http.get("/api/public/v1/home/catitems");
      if (res.meta.status !== 200) {
        return common_vendor.index.$showMsg();
      }
      this.navList = res.message;
    },
    async getFloorList() {
      const {
        data: res
      } = await common_vendor.index.$http.get("/api/public/v1/home/floordata");
      console.log(res);
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      res.message.forEach((floor) => {
        floor.product_list.forEach((prod) => {
          prod.url = "/subpkg/goods_list/goods_list?" + prod.navigator_url.split("?")[1];
        });
      });
      this.floorList = res.message;
    },
    navClickHandler(item) {
      if (item.name === "分类") {
        common_vendor.index.switchTab({
          url: "/pages/cate/cate"
        });
      }
    },
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
    b: common_vendor.f($data.swiperList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id,
        c: i
      };
    }),
    c: common_vendor.f($data.navList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: common_vendor.o(($event) => $options.navClickHandler(item), i),
        c: i
      };
    }),
    d: common_vendor.f($data.floorList, (item, i, i0) => {
      return {
        a: item.floor_title.image_src,
        b: item.product_list[0].image_src,
        c: item.product_list[0].image_width + "rpx",
        d: item.product_list[0].url,
        e: common_vendor.f(item.product_list, (item2, i2, i1) => {
          return common_vendor.e({
            a: i2 !== 0
          }, i2 !== 0 ? {
            b: item2.image_src,
            c: item2.image_width + "rpx"
          } : {}, {
            d: i2,
            e: item2.url
          });
        }),
        f: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
