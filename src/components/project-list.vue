<template>
  <div class="list">
    <el-table
      ref="filterTable"
      :data="list"
      style="width: 100%"
    >
      <el-table-column
        prop="customer_name"
        label="客户名称"
        width="180"
      >
        <template slot-scope="scope">
          <router-link :to="'project-input?id='+scope.row.id">{{scope.row.customer_name}}</router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="customer_phone"
        label="电话号码"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="customer_wechat"
        label="微信号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="customer_origin"
        label="客户来源"
        width="100"
        :filters="customer_origins"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>
      <el-table-column
        prop="company_name"
        label="公司名称"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="company_name"
        label="客户行业"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="customer_type"
        label="客户类别"
        width="100"
        :filters="customer_types"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="project_type"
        label="项目类型"
        width="100"
        :filters="project_types"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="need_product"
        label="需求产品"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="project_addr"
        label="项目地址"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="project_name"
        label="项目名称"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="project_state"
        label="项目状况"
        width="100"
        :filters="project_states"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="customer_level"
        label="客户等级"
        width="100"
        :filters="customer_levels"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="init_comment"
        width="300"
        label="初次沟通内容"
      >
      </el-table-column>

      <el-table-column
        prop="username"
        label="提交者"
      >
      </el-table-column>

      <el-table-column
        prop="created_at"
        width="110"
        label="时间"
      >
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
        "时间"
      ],
      customer_origins: [
        { text: "朋友介绍", value: "朋友介绍" },
        { text: "网络推广", value: "网络推广" },
        { text: "客户推荐", value: "客户推荐" },
        { text: "渠道代理", value: "渠道代理" },
        { text: "自行开发", value: "自行开发" }
      ],
      customer_types: [
        { text: "甲方单位", value: "甲方单位" },
        { text: "总包", value: "总包" },
        { text: "分包", value: "分包" },
        { text: "设计公司", value: "设计公司" },
        { text: "投资方", value: "投资方" },
        { text: "策划公司", value: "策划公司" },
        { text: "中间人", value: "中间人" },
        { text: "运营公司", value: "运营公司" }
      ],
      project_types: [
        { text: "文化旅游", value: "文化旅游" },
        { text: "视觉工程", value: "视觉工程" },
        { text: "数字展馆", value: "数字展馆" },
        { text: "舞美娱乐", value: "舞美娱乐" },
        { text: "其它", value: "其它" }
      ],
      project_states: [
        { text: "项目选址", value: "项目选址" },
        { text: "提案阶段", value: "提案阶段" },
        { text: "项目报批", value: "项目报批" },
        { text: "造价报价", value: "造价报价" },
        { text: "合同审核", value: "合同审核" },
        { text: "签约履约", value: "签约履约" }
      ],
      customer_levels: [
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
        { text: "D", value: "D" }
      ]
    };
  },
  methods: {
    toggle(v) {
      this.active = v;
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    filterTag(value, row) {
      console.log(row);
      return row.customer_origin === value;
    },
    getData() {
      axios
        .get(
          "http://47.97.229.24:9080/v1/project/list?username=" + this.username
        )
        .then(res => {
          if (res.data.code == 200) {
            this.list = res.data.data;
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  overflow: scroll;
  /deep/ .el-table .cell {
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /deep/ .el-table a {
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #606266;
    text-decoration: none;
  }
}
</style>
