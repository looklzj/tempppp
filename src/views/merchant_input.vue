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
        label="店铺名称"
        prop="merchant_name"
      >
        <el-input v-model="ruleForm.merchant_name"></el-input>
      </el-form-item>
      <el-form-item
        label="老板姓名"
        prop="boss_name"
      >
        <el-input v-model="ruleForm.boss_name"></el-input>
      </el-form-item>
      <el-form-item
        label="联系电话"
        prop="contact_phone"
      >
        <el-input v-model="ruleForm.contact_phone"></el-input>
      </el-form-item>
      <el-form-item
        label="微信号"
        prop="wechat"
      >
        <el-input v-model="ruleForm.wechat"></el-input>
      </el-form-item>
      <el-form-item
        label="所在景区"
        prop="scenic_position"
      >
        <el-input v-model="ruleForm.scenic_position"></el-input>
      </el-form-item>

      <el-form-item
        label="目前场地合作模式"
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
        label="租金、分成比例"
        prop="rent_scale"
      >
        <el-input v-model="ruleForm.rent_scale"></el-input>
      </el-form-item>

      <el-form-item
        label="投资意向"
        prop="invest_intent"
      >
        <el-select v-model="ruleForm.invest_intent">
          <el-option
            v-for="(item,index) in invest_intents"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="产品类型"
        prop="product_type"
      >
        <el-select v-model="ruleForm.product_type">
          <el-option
            v-for="(item,index) in product_types"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="产品名称"
        prop="product_name"
      >
        <el-input v-model="ruleForm.product_name"></el-input>
      </el-form-item>

      <el-form-item
        label="人均消费"
        prop="per_consump"
      >
        <el-input
          v-model="ruleForm.per_consump"
          placeholder="元/人"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="经营现状"
        prop="operation_state"
      >
        <el-select v-model="ruleForm.operation_state">
          <el-option
            v-for="(item,index) in operation_states"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="商户评级"
        prop="merchant_level"
      >
        <el-select v-model="ruleForm.merchant_level">
          <el-option
            v-for="(item,index) in merchant_levels"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="店铺地址"
        prop="merchant_addr"
      >
        <el-input v-model="ruleForm.merchant_addr"></el-input>
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
      ruleForm: {
        merchant_name: "",
        boss_name: "",
        contact_phone: "",
        wechat: "",
        scenic_position: "",
        cooperation_mode: "",
        rent_scale: "",
        invest_intent: "",
        product_type: "",
        product_name: "",
        per_consump: "",
        operation_state: "",
        merchant_level: "",
        merchant_addr: "",
        init_comment: ""
      },
      rules: {
        name: [{ required: true, message: "请填写完整", trigger: "blur" }]
      },
      cooperation_modes: ["租赁", "分成", "合作投资"],
      invest_intents: [
        "很想发展",
        "考察决定",
        "只投川内",
        "愿意共投",
        "期待加盟"
      ],
      product_types: [
        "主题乐园",
        "运动户外",
        "亲子互动",
        "美食",
        "小吃",
        "特产",
        "文创产品"
      ],
      operation_states: ["较差", "一般", "很好", "非常好"],
      merchant_levels: ["一", "二", "三", "四", "五"]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://localhost:9080/v1/merchant", this.ruleForm)
            .then(res => {
              if (res.data.code == 400) {
                alert(res.data.data);
              }
              if (res.data.code == 200) {
                alert("添加成功");
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