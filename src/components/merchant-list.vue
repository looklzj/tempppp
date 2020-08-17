<template>
  <div class="list">
    <el-table
      ref="filterTable"
      :data="list"
      style="width: 100%"
    >
      <el-table-column
        prop="merchant_name"
        label="店铺名称"
        width="180"
      >
        <template slot-scope="scope">
          <router-link :to="'merchant-input?id=' + scope.row.id">{{
            scope.row.merchant_name
          }}</router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="boss_name"
        label="老板姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="contact_phone"
        label="联系电话"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="wechat"
        label="微信号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="scenic_position"
        label="所在景区"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="cooperation_mode"
        label="目前场地合作模式"
        width="100"
        :filters="cooperation_modes"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>
      <el-table-column
        prop="rent_scale"
        label="租金分成比"
        width="160"
      >
      </el-table-column>
      <el-table-column
        prop="invest_intent"
        label="投资意向"
        width="100"
        :filters="invest_intents"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>
      <el-table-column
        prop="product_type"
        label="产品类型"
        width="100"
        :filters="product_types"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="product_name"
        label="产品名称"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="per_consump"
        label="人均消费"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="operation_state"
        label="经营现状"
        width="100"
        :filters="operation_states"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>
      <el-table-column
        prop="merchant_level"
        label="商户评级"
        width="100"
        :filters="merchant_levels"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="merchant_addr"
        label="店铺地址"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="init_comment"
        label="初次沟通内容"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="username"
        label="提交者"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="created_at"
        label="时间"
        width="110"
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
        "提交者",
        "时间"
      ],
      cooperation_modes: [
        { text: "租赁", value: "租赁" },
        { text: "分成", value: "分成" },
        { text: "合作投资", value: "合作投资" }
      ],
      invest_intents: [
        { text: "很想发展", value: "很想发展" },
        { text: "考察决定", value: "考察决定" },
        { text: "只投川内", value: "只投川内" },
        { text: "愿意共投", value: "愿意共投" },
        { text: "期待加盟", value: "期待加盟" }
      ],
      product_types: [
        { text: "主题乐园", value: "主题乐园" },
        { text: "运动户外", value: "运动户外" },
        { text: "亲子互动", value: "亲子互动" },
        { text: "美食", value: "美食" },
        { text: "小吃", value: "小吃" },
        { text: "特产", value: "特产" },
        { text: "文创产品", value: "文创产品" }
      ],
      operation_states: [
        { text: "较差", value: "较差" },
        { text: "一般", value: "一般" },
        { text: "很好", value: "很好" },
        { text: "非常好", value: "非常好" }
      ],
      merchant_levels: [
        { text: "一", value: "一" },
        { text: "二", value: "二" },
        { text: "三", value: "三" },
        { text: "四", value: "四" },
        { text: "五", value: "五" }
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
    filterTag(value, row, column) {
      console.log(value);
      console.log(row);
      console.log(column);
      return row[column.property] === value;
    },
    getData() {
      axios
        .get(
          "https://static.rechengparty.com:9080/v1/merchant/list?username=" + this.username
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
