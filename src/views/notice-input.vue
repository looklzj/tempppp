<template>
  <div class="notice-input">
    <div class="header">
      <span @click="$router.go(-1)"
        ><i
          class="el-icon-arrow-left"
        ></i></span
      ><span>公告</span>
    </div>
    <el-form>
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input
          type="textarea"
          :rows="5"
          v-model="ruleForm.content"
        ></el-input>
      </el-form-item>

      <el-button
        style="background:#00BF8B;width:80%;margin:0 auto;color:#fff"
        @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        title: "",
        content: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.notice-input {
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
}
</style>
