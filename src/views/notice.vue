<template>
  <div class="notice">
    <div class="top">
      <h1>公告</h1>
    </div>
    <div class="content">
      <div class="card">
        <h2>公告标题</h2>
        <p>公告内容公告内容公告内公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容容公告内容公告内容公告内容公告内容公告内容</p>
        <div class="delete-notice">
          <i class="el-icon-delete"
          @click="deleteNotice"
          ></i>
        </div>
      </div>
    </div>
    <div class="add-icon">
      <i
        class="el-icon-plus"
        @click="addNotice"
      ></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    deleteNotice(){},
    addNotice() {
      this.$router.push("/notice-input");
    }
  }
};
</script>
<style lang="scss" scoped>
.notice {
  .top {
    padding-top: 10px;
    background: #00bf8b;
    height: 3rem;
    h1 {
      //   margin: 0;
      padding-left: 0.35rem;
      text-align: left;
      color: #fff;
      font-size: 0.6rem;
    }
  }
  .content {
    .card {
      padding: 5px;
      margin: 10px auto 10px;
      width: 90%;
      box-shadow: 0px 0px 25px -5px #ccc;
      border-radius: 8px;
      h2 {
        font-size: 0.42rem;
      }
      p {
        font-size: 0.38rem;
        text-align: left;
      }
      .delete-notice {
        text-align: right;
        color: #00bf8b;
        font-size: 35px;
        margin: 0 10px;
      }
    }
  }
  .add-icon {
    position: fixed;
    bottom: 100px;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 0 6px 2px #ccc;
    i {
      color: #00bf8b;
    }
  }
}
</style>