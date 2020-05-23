<template>
  <div class="xiangmuluru">
    <h3 class="h3">项目录入</h3>

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
        prop="user_name"
      >
        <el-input v-model="ruleForm.user_name"></el-input>
      </el-form-item>
      <el-form-item
        label="电话号码"
        prop="user_phone"
      >
        <el-input v-model="ruleForm.user_phone"></el-input>
      </el-form-item>
      <el-form-item
        label="微信号"
        prop="user_wechart"
      >
        <el-input v-model="ruleForm.user_wechart"></el-input>
      </el-form-item>
      <el-form-item
        label="客户来源"
        prop="user_origin"
      >
        <el-select v-model="ruleForm.user_origin">
          <el-option
            v-for="(item,index) in user_origins"
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
        prop="user_work"
      >
        <el-input v-model="ruleForm.user_work"></el-input>
      </el-form-item>

      <el-form-item
        label="客户类别"
        prop="user_type"
      >
        <el-select v-model="ruleForm.user_type">
          <el-option
            v-for="(item,index) in user_types"
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
        prop="user_level"
      >
        <el-select v-model="ruleForm.user_level">
          <el-option
            v-for="(item,index) in user_levels"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="初次沟通内容"
        prop="talk_content"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.talk_content"
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
export default {
  data() {
    return {
      ruleForm: {
        user_name: "",
        user_phone: "",
        user_wechart: "",
        user_origin: "",
        company_name: "",
        user_work: "",
        user_types: "",
        project_types: "",
        need_product: "",
        project_addr: "",
        project_name: "",
        project_state: "",
        user_levels: "",
        talk_content: ""
      },
      rules: {
        name: [{ required: true, message: "请填写完整", trigger: "blur" }]
      },
      user_origins: [
        "朋友介绍",
        "网络推广",
        "客户推荐",
        "渠道代理",
        "自行开发"
      ],
      project_types: ["文化旅游", "视觉工程", "数字展馆", "舞美娱乐", "其它"],
      user_types: [
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
      user_levels: ["一", "二", "三", "四", "五"]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.$refs[formName].model);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>