<template>
  <div class="notice">
    <div class="top">
      <h1>公告</h1>
    </div>
    <div class="content">
      <div
        class="card"
        v-for="(item,index) in list"
        :key="index"
      >
        <h2>{{item.title}}</h2>
        <p>{{item.content}}</p>
        <i>{{item.created_at.split("+")[0].replace("T"," ")}}</i>
        <div
          class="delete-notice"
          v-if="user==='魏晓飞'"
        >
          <i
            class="el-icon-delete"
            @click="deleteNotice(item.id)"
          ></i>
        </div>
      </div>
    </div>
    <div
      class="add-icon"
      v-if="user==='魏晓飞'"
    >
      <i
        class="el-icon-plus"
        @click="addNotice"
      ></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      user: "",
      list: []
    };
  },
  mounted() {
    this.user = window.localStorage.getItem("username");
    this.getData();
  },
  methods: {
    getData() {
      axios.get("https://static.rechengparty.com:9080/v1/notice/list").then(res => {
        if (res.data.code == 200) {
          this.list = res.data.data;
        }
      });
    },
    deleteNotice(id) {
      let that = this;
      axios
        .get("https://static.rechengparty.com:9080/v1/notice/delete?id=" + id)
        .then(res => {
          if (res.data.code == 200) {
            Toast({
              message: "操作成功",
              position: "middle",
              duration: 5000
            });
          } else {
            Toast({
              message: "操作失败",
              position: "middle",
              duration: 5000
            });
          }
          that.getData();
        });
    },
    addNotice() {
      this.$router.push("/notice-input");
    }
  }
};
</script>
<style lang="scss" scoped>
.notice {
  margin-bottom: 100px;
  .top {
    padding-top: 10px;
    background: #00bf8b;
    height: 3rem;
    h1 {
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
      >i{
        font-size:13px;
      }
      .delete-notice {
        text-align: right;
        color: #00bf8b;
        font-size: 30px;
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
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 6px 2px #ccc;
    i {
      color: #00bf8b;
    }
  }
}
</style>
