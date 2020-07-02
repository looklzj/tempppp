<template>
  <div class="project-input">
    <div class="header"><span @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></span><span>景区</span></div>
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
        prop="init_comment"
      >
        <el-input
          type="textarea"
          :rows="5"
          v-model="ruleForm.init_comment"
        ></el-input>
      </el-form-item>

      <div class="tags">
        <div
          class="item"
          v-for="(item,index) in tags"
          :key="index"
        >
          <span>{{item.title}}</span>
          <span>{{item.comment}}</span>
          <span>{{item.created_at.split("+")[0]}}</span>
        </div>
      </div>

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
          prop="comment"
        >
          <el-input
            type="textarea"
            :rows="5"
            v-model="ruleForm2.comment"
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
        init_comment: "",
        username: window.localStorage.getItem("username")
      },
      rules: {
        name: [{ required: true, message: "请填写完整", trigger: "blur" }]
      },
      ruleForm2: {
        title: "",
        comment: ""
      },
      tags: [],
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
      cooperation_modes: ["固定租金", "场地分成", "保底加分成", "共同打造"],
      scenic_cooperations: ["有", "无"],
      scenic_tickets: ["有", "无"],
      scenic_levels: ["一", "二", "三", "四", "五"]
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
          .get("http://47.97.229.24:9080/v1/scenic?id=" + this.$route.query.id)
          .then(res => {
            this.ruleForm = res.data;
          });
        axios
          .get(
            "http://47.97.229.24:9080/v1/tag?record_id=" +
              this.$route.query.id +
              "&typ=2"
          )
          .then(res => {
            this.tags = res.data.data;
            console.log(this.tags);
          });
      }
    },
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(
              "http://47.97.229.24:9080/v1/scenic?user=" + this.user,
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
          this.ruleForm2.record_id = this.ruleForm.id;
          this.ruleForm2.typ = 2;
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
          margin-top: 5px;
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