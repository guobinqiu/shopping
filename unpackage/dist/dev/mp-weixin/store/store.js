"use strict";
const common_vendor = require("../common/vendor.js");
const store_cart = require("./cart.js");
const store_user = require("./user.js");
console.log("---------vue3");
const store = common_vendor.createStore({
  modules: {
    "m_cart": store_cart.moduleCart,
    "m_user": store_user.moduleUser
  }
});
exports.store = store;
