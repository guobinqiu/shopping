"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_store = require("./store/store.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/cate/cate.js";
  "./pages/cart/cart.js";
  "./pages/my/my.js";
  "./subpkg/goods_detail/goods_detail.js";
  "./subpkg/goods_list/goods_list.js";
  "./subpkg/search/search.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/guobin/Documents/HBuilderProjects/test/App.vue"]]);
common_vendor.$http.baseUrl = "https://www.uinav.com";
common_vendor.$http.beforeRequest = function(options) {
  common_vendor.index.showLoading({
    title: "数据加载中..."
  });
};
common_vendor.$http.afterRequest = function(options) {
  common_vendor.index.hideLoading();
};
common_vendor.index.$http = common_vendor.$http;
common_vendor.index.$showMsg = function(title = "数据请求失败", duration = 1500) {
  common_vendor.index.showToast({
    title,
    duration,
    icon: "none"
  });
};
console.log("=============vue3");
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_store.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
