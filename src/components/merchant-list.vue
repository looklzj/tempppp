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
            @click="$router.push('/merchant-input?id=' + item.id)"
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
        "店铺名称",
        "老板姓名",
        "联系电话",
        "微信号",
        "所在景区",
        "目前场地合作模式",
        "租金分成比",
        "投资意向",
        "产品类型",
        "产品名称",
        "人均消费",
        "经营现状",
        "商户评级",
        "店铺地址",
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
        .get(
          "http://47.97.229.24:9080/v1/merchant/list?username=" + this.username
        )
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
