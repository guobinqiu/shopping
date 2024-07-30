"use strict";
const common_vendor = require("../common/vendor.js");
const badgeMixin = {
  computed: {
    ...common_vendor.mapGetters("m_cart", ["total"])
    // total() {
    // 	return this.$store.getters['m_cart/total']
    // }
  },
  onShow() {
    this.setBadge();
  },
  methods: {
    // total() {
    // 	return this.$store.getters['m_cart/total']
    // },
    setBadge() {
      common_vendor.index.setTabBarBadge({
        index: 2,
        // text: this.total() + "",
        text: this.total + ""
      });
    }
  }
};
exports.badgeMixin = badgeMixin;
