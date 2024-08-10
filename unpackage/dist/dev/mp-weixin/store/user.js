"use strict";
const common_vendor = require("../common/vendor.js");
const moduleUser = {
  namespaced: true,
  state: {
    address: JSON.parse(common_vendor.index.getStorageSync("address") || "{}"),
    token: common_vendor.index.getStorageSync("token") || "",
    userinfo: JSON.parse(common_vendor.index.getStorageSync("userinfo") || "{}")
  },
  mutations: {
    updateAddress(state, address) {
      state.address = address;
      this.commit("m_user/saveAddressToStorage");
    },
    saveAddressToStorage(state) {
      common_vendor.index.setStorageSync("address", JSON.stringify(state.address));
    },
    updateUserInfo(state, userinfo) {
      state.userinfo = userinfo;
      this.commit("m_user/saveUserInfoToStorage");
    },
    saveUserInfoToStorage(state) {
      common_vendor.index.setStorageSync("userinfo", JSON.stringify(state.userinfo));
    },
    updateToken(state, token) {
      state.token = token;
      this.commit("m_user/saveTokenToStrorage");
    },
    saveTokenToStrorage(state) {
      common_vendor.index.setStorageSync("token", state.token);
    }
  },
  getters: {
    addstr(state) {
      if (!state.address.provinceName)
        return "";
      return state.address.provinceName + state.address.cityName + state.address.countryName + state.address.detailInfo;
    }
  }
};
exports.moduleUser = moduleUser;
