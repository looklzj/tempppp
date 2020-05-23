<template>
  <div class="project-input">
    <el-form
      :model="ruleForm"
      :rules="rules"
      :label-position="'left'"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="景区名称"
        prop="scenic_name"
      >
        <el-input v-model="ruleForm.scenic_name"></el-input>
      </el-form-item>
      <el-form-item
        label="景区类型"
        prop="scenic_type"
      >
        <el-input v-model="ruleForm.scenic_type"></el-input>
      </el-form-item>
      <el-form-item
        label="推荐等级"
        prop="scenic_level"
      >
        <el-select v-model="ruleForm.scenic_level">
          <el-option
            v-for="(item,index) in scenic_levels"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="开园时间"
        prop="scenic_open"
      >
        <el-input v-model="ruleForm.scenic_open"></el-input>
      </el-form-item>
      <el-form-item
        label="年游客量"
        prop="year_people"
      >
        <el-input
          v-model="ruleForm.year_people"
          placeholder="人次"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="门票销售"
        prop="scenic_ticket"
      >
        <el-select v-model="ruleForm.scenic_ticket">
          <el-option
            v-for="(item,index) in scenic_tickets"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="成人"
        prop="adult"
      >
        <el-input v-model="ruleForm.adult_ticket"></el-input>
      </el-form-item>

      <el-form-item
        label="儿童"
        prop="child"
      >
        <el-input v-model="ruleForm.child_ticket"></el-input>
      </el-form-item>

      <el-form-item
        label="合作机会"
        prop="scenic_cooperation"
      >
        <el-select v-model="ruleForm.scenic_cooperation">
          <el-option
            v-for="(item,index) in scenic_cooperations"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="合作类型"
        prop="cooperation_type"
      >
        <el-select v-model="ruleForm.cooperation_type">
          <el-option
            v-for="(item,index) in cooperation_types"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="物业类型"
        prop="property_type"
      >
        <el-select v-model="ruleForm.property_type">
          <el-option
            v-for="(item,index) in property_types"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="物业面积"
        prop="property_size"
      >
        <el-input
          v-model="ruleForm.property_size"
          placeholder="公顷"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="合作模式"
        prop="cooperation_mode"
      >
        <el-select v-model="ruleForm.cooperation_mode">
          <el-option
            v-for="(item,index) in cooperation_modes"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="租金比例"
        prop="rent_scale"
      >
        <el-input v-model="ruleForm.rent_scale"></el-input>
      </el-form-item>

      <el-form-item
        label="景区联络人"
        prop="contact_name"
      >
        <el-input v-model="ruleForm.contact_name"></el-input>
      </el-form-item>

      <el-form-item
        label="职位"
        prop="contact_work"
      >
        <el-input v-model="ruleForm.contact_work"></el-input>
      </el-form-item>

      <el-form-item
        label="电话号码"
        prop="contact_phone"
      >
        <el-input v-model="ruleForm.contact_phone"></el-input>
      </el-form-item>

      <el-form-item
        label="微信号码"
        prop="contact_wechat"
      >
        <el-input v-model="ruleForm.contact_wechat"></el-input>
      </el-form-item>

      <el-form-item
        label="景区背景公司"
        prop="scenic_company"
      >
        <el-input v-model="ruleForm.scenic_company"></el-input>
      </el-form-item>

      <el-form-item
        label="景区地址"
        prop="scenic_addr"
      >
        <el-input
          type="textarea"
          :rows="5"
          v-model="ruleForm.scenic_addr"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="初次沟通内容"
        prop="talk_content"
      >
        <el-input
          type="textarea"
          :rows="5"
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
        scenic_name: "",
        scenic_type: "",
        scenic_level: "",
        scenic_open: "",
        year_people: "",
        scenic_ticket: "",
        adult_ticket: "",
        child_ticket: "",
        scenic_cooperation: "",
        cooperation_type: "",
        property_type: "",
        property_size: "",
        cooperation_mode: "",
        rent_scale: "",

        contact_name: "",
        contact_work: "",
        contact_phone: "",
        contact_wechat: "",
        scenic_company: "",
        scenic_addr: "",
        talk_content:"",
      },
      rules: {
        name: [{ required: true, message: "请填写完整", trigger: "blur" }]
      },
      property_types: [
        "室内建筑",
        "商业街区",
        "户外空地",
        "可以搭建",
        "不可搭建"
      ],
      cooperation_types: [
        "主题乐园",
        "运动、户外",
        "水上乐园",
        "动物互动",
        "美食小吃",
        "旅游商品",
        "其他"
      ],
      scenic_cooperations: ["有", "无"],
      scenic_tickets: ["有", "无"],
      scenic_levels: ["一", "二", "三", "四", "五"]
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
<style lang="scss" scoped>
.project-input {
  padding-bottom: 300px;
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