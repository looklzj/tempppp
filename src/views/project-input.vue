<template>
  <div class="project-input">
    <div class="header"><span @click="$router.go(-1)">&lt;</span><span>项目</span></div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      :label-position="'left'"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="客户名称"
        prop="customer_name"
      >
        <el-input v-model="ruleForm.customer_name"></el-input>
      </el-form-item>
      <el-form-item
        label="电话号码"
        prop="customer_phone"
      >
        <el-input v-model="ruleForm.customer_phone"></el-input>
      </el-form-item>
      <el-form-item
        label="微信号"
        prop="customer_wechat"
      >
        <el-input v-model="ruleForm.customer_wechat"></el-input>
      </el-form-item>
      <el-form-item
        label="客户来源"
        prop="customer_origin"
      >
        <el-select v-model="ruleForm.customer_origin">
          <el-option
            v-for="(item,index) in customer_origins"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="公司名称"
        prop="company_name"
      >
        <el-input v-model="ruleForm.company_name"></el-input>
      </el-form-item>
      <el-form-item
        label="客户行业"
        prop="customer_perfession"
      >
        <el-input v-model="ruleForm.customer_perfession"></el-input>
      </el-form-item>

      <el-form-item
        label="客户类别"
        prop="customer_type"
      >
        <el-select v-model="ruleForm.customer_type">
          <el-option
            v-for="(item,index) in customer_type"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="项目类型"
        prop="project_type"
      >
        <el-select v-model="ruleForm.project_type">
          <el-option
            v-for="(item,index) in project_types"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="需求产品"
        prop="need_product"
      >
        <el-input v-model="ruleForm.need_product"></el-input>
      </el-form-item>

      <el-form-item
        label="项目地址"
        prop="project_addr"
      >
        <el-input
          type="textarea"
          :rows="5"
          v-model="ruleForm.project_addr"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="项目名称"
        prop="project_name"
      >
        <el-input v-model="ruleForm.project_name"></el-input>
      </el-form-item>

      <el-form-item
        label="项目状况"
        prop="project_state"
      >
        <el-select v-model="ruleForm.project_state">
          <el-option
            v-for="(item,index) in project_states"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="客户等级"
        prop="customer_level"
      >
        <el-select v-model="ruleForm.customer_level">
          <el-option
            v-for="(item,index) in customer_levels"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="初次沟通内容"
        prop="init_comment"
      >
        <el-input
          type="textarea"
          :rows="5"
          v-model="ruleForm.init_comment"
        ></el-input>
      </el-form-item>

      <el-button
        style="background:#00BF8B;width:80%;margin:0 auto;color:#fff"
        @click="submitForm('ruleForm')"
      >立即创建</el-button>

    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: "",
      ruleForm: {
        customer_name: "",
        customer_phone: "",
        customer_wechat: "",
        customer_origin: "",
        company_name: "",
        customer_perfession: "",
        customer_type: "",
        project_type: "",
        need_product: "",
        project_addr: "",
        project_name: "",
        project_state: "",
        customer_level: "",
        init_comment: ""
      },
      rules: {
        name: [{ required: true, message: "请填写完整", trigger: "blur" }]
      },
      customer_origins: [
        "朋友介绍",
        "网络推广",
        "客户推荐",
        "渠道代理",
        "自行开发"
      ],
      project_types: ["文化旅游", "视觉工程", "数字展馆", "舞美娱乐", "其它"],
      customer_type: [
        "甲方单位",
        "总包",
        "分包",
        "设计公司",
        "投资方",
        "策划公司",
        "中间人",
        "运营公司"
      ],
      project_states: [
        "项目选址",
        "提案阶段",
        "项目报批",
        "造价报价",
        "合同审核",
        "签约履约"
      ],
      customer_levels: ["一", "二", "三", "四", "五"]
    };
  },
  mounted() {
    this.user = window.decodeURIComponent(
      window.location.search.split("user=")[1]
    );
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(
              "http://47.111.181.52:9080/v1/project?user=" + this.user,
              this.ruleForm
            )
            .then(res => {
              if (res.data.code == 400) {
                that.$message(res.data.data);
              }
              if (res.data.code == 200) {
                that.$message("添加成功");
                window.location.reload(true);
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.project-input {
  padding: 20px;
  padding-top: 70px;
  padding-bottom: 300px;
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    font-size: 22px;
    height: 50px;
    box-shadow: 1px 8px 25px -9px #ccc;
    background: #fff;
    z-index: 10;
    text-align: center;
    span {
      color: #00bf8b;
      &:nth-child(1) {
        float: left;
        margin-left: 24px;
        margin-top: 10px;
      }
      &:nth-child(2) {
        margin-left: -24px;
        margin-top: 9px;
        display: inline-block;
      }
    }
  }
  /deep/ .el-form-item__content {
    > div {
      width: 100%;
    }
  }
  /deep/.el-form-item__label {
    color: #00bf8b;
  }
}
</style>