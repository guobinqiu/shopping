"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-login",
  data() {
    return {};
  },
  methods: {
    ...common_vendor.mapMutations("m_user", ["updateUserInfo", "updateToken"]),
    //微信基础库用2.20.3
    getUserInfo(e) {
      console.log(e);
      if (e.detail.errMsg === "getUserInfo:fail auth deny")
        return common_vendor.index.$showMsg("已取消登录授权");
      console.log(e.detail.userInfo);
      this.updateUserInfo(e.detail.userInfo);
      this.getToken(e.detail);
    },
    // getUserProfile(e) {
    // 	uni.getUserProfile({
    // 		desc: '请求授权',
    // 		success: (res) => {
    // 			console.log(res)
    // 		},
    // 		fail: (err) => {
    // 			return uni.$showMsg("已取消登录授权")
    // 		}
    // 	})
    // },
    async getToken(info) {
      const res = await common_vendor.index.login();
      if (res.errMsg !== "login:ok")
        return common_vendor.index.$showMsg("登录失败!");
      const query = {
        code: res.code,
        encryptedData: info.encryptedData,
        iv: info.iv,
        rawData: info.rawData,
        signature: info.signature
      };
      const { data: loginResult } = await common_vendor.index.$http.post("/api/public/v1/users/wxlogin", query);
      console.log(loginResult);
      const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo";
      this.updateToken(token);
    }
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
  return {
    a: common_vendor.p({
      type: "contact-filled",
      size: "100",
      color: "#AFAFAF"
    }),
    b: common_vendor.o((...args) => $options.getUserInfo && $options.getUserInfo(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/guobin/Documents/HBuilderProjects/test/components/my-login/my-login.vue"]]);
wx.createComponent(Component);
