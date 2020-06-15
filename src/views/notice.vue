<template>
  <div class="notice">
    <div class="top">
      <h1>公告</h1>
    </div>
    <div class="content">
      <div class="card">
        <h2>公告标题</h2>
        <p>公告内容公告内容公告内公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容容公告内容公告内容公告内容公告内容公告内容</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {};
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
    }
  }
}
</style>