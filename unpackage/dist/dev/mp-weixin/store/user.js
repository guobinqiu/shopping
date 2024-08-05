"use strict";
const common_vendor = require("../common/vendor.js");
const moduleUser = {
  namespaced: true,
  state: {
    address: JSON.parse(common_vendor.index.getStorageSync("address") || "{}"),
    token: ""
  },
  mutations: {
    updateAddress(state, address) {
      state.address = address;
      this.commit("m_user/saveAddressToStorage");
    },
    saveAddressToStorage(state) {
      common_vendor.index.setStorageSync("address", JSON.stringify(state.address));
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
