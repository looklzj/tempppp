<template>
  <div class="project-input">
    <div class="header">
      <span @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></span><span>商户</span>
    </div>

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
            v-for="(item, index) in cooperation_modes"
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
            v-for="(item, index) in invest_intents"
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
            v-for="(item, index) in product_types"
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
            v-for="(item, index) in operation_states"
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
            v-for="(item, index) in merchant_levels"
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
        style="background:#00BF8B;width:68%;margin:0 auto;color:#fff;float:right;"
        @click="submitForm('ruleForm')"
      >{{ bottomBtn }}</el-button>
      <el-button
        v-if="ruleForm.id!=0"
        @click="dialogVisible = true"
        style="background:#00BF8B;width:30%;margin:0 auto;color:#fff;float:left;"
      >添加标签</el-button>
    </el-form>
    <el-dialog
      title="添加标签"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :visible.sync="dialogVisible"
      width="100%"
    >
      <el-form
        :model="ruleForm2"
        :label-position="'left'"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="标题"
          prop="title"
        >
          <el-input v-model="ruleForm2.title"></el-input>
        </el-form-item>
        <el-form-item
          label="内容"
          prop="content"
        >
          <el-input
            type="textarea"
            :rows="5"
            v-model="ruleForm2.content"
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addTag('ruleForm2')"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import axios from "axios";
export default {
  data() {
    return {
      dialogVisible: false,
      bottomBtn: "立即创建",
      user: "",
      ruleForm: {
        id: 0,
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
        init_comment: "",
        username: window.localStorage.getItem("username")
      },
      ruleForm2: {
        id: 0,
        title: "",
        content: ""
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
  mounted() {
    this.user = window.localStorage.getItem("username");
    this.getData();
  },
  methods: {
    getData() {
      if (this.$route.query.id) {
        this.bottomBtn = "立即修改";
        axios
          .get(
            "http://47.97.229.24:9080/v1/merchant?id=" + this.$route.query.id
          )
          .then(res => {
            this.ruleForm = res.data;
          });
      }
    },
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(
              "http://47.97.229.24:9080/v1/merchant?user=" + this.user,
              this.ruleForm
            )
            .then(res => {
              if (res.data.code == 400) {
                Toast({
                  message: res.data.data,
                  position: "middle",
                  duration: 5000
                });
              }
              if (res.data.code == 200) {
                Toast({
                  message: "操作成功",
                  position: "middle",
                  duration: 5000
                });
                this.$router.push("/home");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    addTag(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.ruleForm2.id = this.ruleForm.id;
          axios
            .post(
              "http://47.97.229.24:9080/v1/tag?user=" + this.user,
              this.ruleForm2
            )
            .then(res => {
              if (res.data.code == 400) {
                Toast({
                  message: res.data.data,
                  position: "middle",
                  duration: 5000
                });
              }
              if (res.data.code == 200) {
                Toast({
                  message: "操作成功",
                  position: "middle",
                  duration: 5000
                });
                this.$router.push("/home");
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
  .tags {
    margin: 40px 0;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    .item {
      font-size: 14px;
      padding: 20px;
      border: 1px solid #ccc;
      min-width: 180px;
      span {
        display: block;
        &:nth-child(1) {
          background: #00bf8b;
          color: #fff;
        }
        &:nth-child(2) {
        }
        &:nth-child(3) {
          margin-top: 10px;
          color: #00bf8b;
        }
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
  /deep/.el-dialog__footer {
    text-align: center;
  }
  /deep/.el-button--primary {
    background: #00bf8b;
  }
}
</style>
