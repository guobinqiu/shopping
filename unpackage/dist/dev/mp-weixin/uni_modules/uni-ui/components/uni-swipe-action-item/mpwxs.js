"use strict";
const common_vendor = require("../../../../common/vendor.js");
const mpwxs = {
  data() {
    return {
      position: [],
      button: {},
      btn: "[]"
    };
  },
  // computed: {
  // 	pos() {
  // 		return JSON.stringify(this.position)
  // 	},
  // 	btn() {
  // 		return JSON.stringify(this.button)
  // 	}
  // },
  watch: {
    button: {
      handler(newVal) {
        this.btn = JSON.stringify(newVal);
      },
      deep: true
    },
    show(newVal) {
      if (this.autoClose)
        return;
      if (!this.button) {
        this.init();
        return;
      }
      this.button.show = newVal;
    },
    leftOptions() {
      this.init();
    },
    rightOptions() {
      this.init();
    }
  },
  created() {
    if (this.swipeaction.children !== void 0) {
      this.swipeaction.children.push(this);
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.swipeaction.children.forEach((item, index) => {
      if (item === this) {
        this.swipeaction.children.splice(index, 1);
      }
    });
  },
  methods: {
    init() {
      clearTimeout(this.swipetimer);
      this.swipetimer = setTimeout(() => {
        this.getButtonSize();
      }, 50);
    },
    closeSwipe(e) {
      if (!this.autoClose)
        return;
      this.swipeaction.closeOther(this);
    },
    change(e) {
      this.$emit("change", e.open);
      let show = this.button.show;
      if (show !== e.open) {
        this.button.show = e.open;
      }
    },
    appTouchStart(e) {
      const {
        clientX
      } = e.changedTouches[0];
      this.clientX = clientX;
      this.timestamp = (/* @__PURE__ */ new Date()).getTime();
    },
    appTouchEnd(e, index, item, position) {
      const {
        clientX
      } = e.changedTouches[0];
      let diff = Math.abs(this.clientX - clientX);
      let time = (/* @__PURE__ */ new Date()).getTime() - this.timestamp;
      if (diff < 40 && time < 300) {
        this.$emit("click", {
          content: item,
          index,
          position
        });
      }
    },
    getButtonSize() {
      const views = common_vendor.index.createSelectorQuery().in(this);
      views.selectAll(".uni-swipe_button-group").boundingClientRect((data) => {
        let show = "none";
        if (this.autoClose) {
          show = "none";
        } else {
          show = this.show;
        }
        this.button = {
          data,
          show
        };
      }).exec();
    }
  }
};
exports.mpwxs = mpwxs;
