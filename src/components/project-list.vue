<template>
  <div class="list">
   <el-table
    ref="filterTable"
    :data="list"
    style="width: 100%">
    <el-table-column
      prop="customer_name"
      label="客户名称"
      width="180">
    </el-table-column>
       <el-table-column
      prop="customer_phone"
      label="电话号码"
      width="180">
    </el-table-column>
       <el-table-column
      prop="customer_wechat"
      label="微信号"
      width="180">
    </el-table-column>
          <el-table-column
      prop="tag"
      label="客户来源"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">

    </el-table-column>
       <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">

    </el-table-column>
  </el-table>
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
