<template>
  <div class="list">
    <ul>
      <li>
        <ul>
          <li></li>
          <li v-for="(item, index) in titles" :key="index">{{ item }}</li>
        </ul>
      </li>
      <li v-for="(item, index) in list" :key="index">
        <ul>
          <li
            v-for="(v, k, i) in item"
            :key="i"
            @click="$router.push('/scenic-input?id=' + item.id)"
          >
            {{ v }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      username: window.localStorage.getItem("username"),
      list: [],
      titles: [
        "景区名称",
        "景区类型",
        "推荐等级",
        "开园时间",
        "年游客量",
        "门票销售",
        "成人",
        "儿童",
        "合作机会",
        "合作类型",
        "物业类型",
        "物业面积",
        "合作模式",
        "租金比例",
        "景区联络人",
        "职位",
        "电话号码",
        "微信号码",
        "景区背景公司",
        "景区地址",
        "初次沟通内容",
      ],
    };
  },
  methods: {
    toggle(v) {
      this.active = v;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://47.97.229.24:9080/v1/scenic/list?username=" + this.username)
        .then((res) => {
          if (res.data.code == 200) {
            this.list = res.data.data;
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  overflow: scroll;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.35rem;
    display: flex;
    flex-direction: column;
    > li {
      &:nth-child(1) {
        color: #909399;
        font-weight: 500;
      }
      > ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0;
        margin: 2px;
        > li {
          word-break: keep-all;
          white-space: nowrap;
          flex: 0 0 3rem;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #606266;
          pointer-events: none;
          text-align: left;
          &:nth-child(1) {
            display: none;
          }
          &:nth-child(2) {
            pointer-events: unset;
          }
        }
      }
    }
  }
}
</style>
