<template>
  <div
    class="tab"
    v-if="active!=''"
  >
    <div>
      <img
        @click="$router.push('/home')"
        :src="active=='home'?homeActiveIcon:homeIcon"
      >
    </div>
    <div>
      <img
        @click="$router.push('/records')"
        :src="active=='records'?recordActiveIcon:recordIcon"
      >
    </div>
    <div>
      <img
        @click="$router.push('/notice')"
        :src="active=='notice'?noticeActiveIcon:noticeIcon"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
      homeIcon: require("../assets/images/bottom-tab/home.png"),
      homeActiveIcon: require("../assets/images/bottom-tab/home-active.png"),
      recordIcon: require("../assets/images/bottom-tab/record.png"),
      recordActiveIcon: require("../assets/images/bottom-tab/record-active.png"),
      noticeIcon: require("../assets/images/bottom-tab/notice.png"),
      noticeActiveIcon: require("../assets/images/bottom-tab/notice-active.png")
    };
  },
  mounted() {},
  watch: {
    "$route.path": {
      handler: function(newVal, oldVal) {
        console.log(newVal);
        if (newVal === "/home") {
          this.active = "home";
        } else if (newVal === "/records") {
          this.active = "records";
        } else if (newVal === "/notice") {
          this.active = "notice";
        } else {
          this.active = "";
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped lang="scss">
.tab {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 28px -7px #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  > div {
    img {
      width: 0.65rem;
    }
  }
}
</style>
