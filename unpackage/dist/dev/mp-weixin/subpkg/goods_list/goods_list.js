"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      queryObj: {
        query: "",
        cid: "",
        pagenum: 1,
        pagesize: 10
      },
      goodsList: [],
      total: 0,
      //defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
      isloading: false
    };
  },
  onLoad(options) {
    this.queryObj.query = options.query || "";
    this.queryObj.cid = options.cid || "";
    this.getGoodsList();
  },
  onReachBottom() {
    if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total)
      return common_vendor.index.$showMsg("数据加载完毕!");
    if (this.isloading)
      return;
    this.queryObj.pagenum++;
    this.getGoodsList();
  },
  onPullDownRefresh() {
    this.queryObj.pagenum = 1;
    this.total = 0;
    this.isloading = false;
    this.goodsList = [];
    this.getGoodsList();
    common_vendor.index.stopPullDownRefresh();
  },
  methods: {
    async getGoodsList() {
      this.isloading = true;
      const {
        data: res
      } = await common_vendor.index.$http.get("/api/public/v1/goods/search", this.queryObj);
      console.log(res);
      this.isloading = false;
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      this.goodsList = [...this.goodsList, ...res.message.goods];
      this.total = res.message.total;
    },
    gotoDetail(goods) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + goods.goods_id
      });
    }
  }
};
if (!Array) {
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  _easycom_my_goods2();
}
const _easycom_my_goods = () => "../../components/my-goods/my-goods.js";
if (!Math) {
  _easycom_my_goods();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsList, (goods, i, i0) => {
      return {
        a: "39ae791f-0-" + i0,
        b: common_vendor.p({
          goods
        }),
        c: i,
        d: common_vendor.o(($event) => $options.gotoDetail(goods), i)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/subpkg/goods_list/goods_list.vue"]]);
wx.createPage(MiniProgramPage);
