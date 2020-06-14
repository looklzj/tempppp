<template>
  <div class="records">
    <div class="top">
      <h1>记录</h1>
      <div class="tabs">
        <div @click="toggle('project')">项目信息
          <div v-show="active==='project'"></div>
        </div>
        <div @click="toggle('scenic')">景区信息
          <div v-show="active==='scenic'"></div>
        </div>
        <div @click="toggle('merchant')">商户信息
          <div v-show="active==='merchant'"></div>
        </div>
      </div>
    </div>
    <div class="middle">
      <project-list v-if="active==='project'" />
      <scenic-list v-if="active==='scenic'" />
      <merchant-list v-if="active==='merchant'" />
    </div>
  </div>
</template>
<script>
import projectList from "../components/project-list";
import scenicList from "../components/scenic-list";
import merchantList from "../components/merchant-list";
export default {
  components: {
    projectList,
    scenicList,
    merchantList
  },
  data() {
    return { active: "project" };
  },
  methods: {
    toggle(v) {
      this.active = v;
    }
  }
};
</script>
<style lang="scss" scoped>
.records {
  margin-bottom: 60px;
  .top {
    position: relative;
    background: #00bf8b;
    padding-top: 10px;
    height: 3rem;
    overflow: visible;
    h1 {
      padding-left: 0.35rem;
      text-align: left;
      font-size: 0.6rem;
      color: #fff;
    }
    .tabs {
      position: absolute;
      width: 100%;
      bottom: 0.12rem;
      font-size: 0.4rem;
      display: flex;
      justify-content: space-around;
      color: #fff;
      > div {
        > div {
          margin: 3px auto 0;
          width: 0.6rem;
          height: 3px;
          background: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>