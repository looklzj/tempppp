<template>
  <div class="list">
    <el-table
      ref="filterTable"
      :data="list"
      style="width: 100%"
    >
      <el-table-column
        prop="scenic_name"
        label="客户名称"
        width="180"
      >
        <template slot-scope="scope">
          <router-link :to="'scenic-input?id=' + scope.row.id">{{
            scope.row.scenic_name
          }}</router-link>
        </template>
      </el-table-column>

      <el-table-column
        prop="scenic_type"
        label="景区类型"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="scenic_level"
        label="推荐等级"
        width="100"
        :filters="scenic_levels"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="scenic_open"
        label="开园时间"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="year_people"
        label="年游客量"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="scenic_ticket"
        label="门票销售"
        width="100"
        :filters="scenic_tickets"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="adult_ticket"
        label="成人"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="child_ticket"
        label="儿童"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="scenic_cooperation"
        label="合作机会"
        width="100"
        :filters="scenic_cooperations"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="cooperation_type"
        label="合作类型"
        width="100"
        :filters="cooperation_types"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="property_type"
        label="物业类型"
        width="100"
        :filters="property_types"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="property_size"
        label="物业面积"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="cooperation_mode"
        label="合作模式"
        width="180"
        :filters="cooperation_modes"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
      </el-table-column>

      <el-table-column
        prop="rent_scale"
        label="租金比例"
        width="100"
      >
      </el-table-column>

      <el-table-column
        prop="contact_name"
        label="景区联络人"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="contact_work"
        label="职位"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="contact_phone"
        label="电话号码"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="contact_wechat"
        label="微信号码"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="scenic_company"
        label="景区背景公司"
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="scenic_addr"
        label="景区地址"
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
        "提交者",
        "时间"
      ],
      property_types: [
        { text: "室内建筑", value: "室内建筑" },
        { text: "商业街区", value: "商业街区" },
        { text: "户外空地", value: "户外空地" },
        { text: "可以搭建", value: "可以搭建" },
        { text: "不可搭建", value: "不可搭建" }
      ],
      cooperation_types: [
        { text: "主题乐园", value: "主题乐园" },
        { text: "运动、户外", value: "运动、户外" },
        { text: "水上乐园", value: "水上乐园" },
        { text: "动物互动", value: "动物互动" },
        { text: "美食小吃", value: "美食小吃" },
        { text: "旅游商品", value: "旅游商品" },
        { text: "其他", value: "其他" }
      ],
      cooperation_modes: [
        { text: "固定租金", value: "固定租金" },
        { text: "场地分成", value: "场地分成" },
        { text: "保底加分成", value: "保底加分成" },
        { text: "共同打造", value: "共同打造" }
      ],
      scenic_cooperations: [
        { text: "有", value: "有" },
        { text: "无", value: "无" }
      ],
      scenic_tickets: [
        { text: "有", value: "有" },
        { text: "无", value: "无" }
      ],
      scenic_levels: [
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
    filterTag(value, row) {
      console.log(row);
      return row.customer_origin === value;
    },
    getData() {
      axios
        .get(
          "http://47.97.229.24:9080/v1/scenic/list?username=" + this.username
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
