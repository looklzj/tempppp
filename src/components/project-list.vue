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
            @click="$router.push('/project-input?id=' + item.id)"
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
        "客户名称",
        "电话号码",
        "微信号",
        "客户来源",
        "公司名称",
        "客户行业",
        "客户类别",
        "项目类型",
        "需求产品",
        "项目地址",
        "项目名称",
        "项目状况",
        "客户等级",
        "初次沟通内容",
        "提交者",
        "时间",
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
          "http://47.97.229.24:9080/v1/project/list?username=" + this.username
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
        > ul > li {
          color: #00bf8b;
          font-weight: 500;
        }
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
