<template>
  <div class="home">
    <div class="top">
      <h1 class="username">{{ username }}</h1>
      <div class="banner">
        <div class="title">信息录入<span></span></div>
        <div class="infos">
          <div class="info">
            <div class="num">+{{ countObj.project }}</div>
            <div class="label">项目</div>
          </div>
          <div class="info">
            <div class="num">+{{ countObj.scenic }}</div>
            <div class="label">景区</div>
          </div>
          <div class="info">
            <div class="num">+{{ countObj.merchant }}</div>
            <div class="label">商户</div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="nav">
        <div class="nav-item">
          <img
            src="../assets/images/home-tab/project.png"
            @click="$router.push('/project-input')"
            alt=""
          />
        </div>
        <div class="nav-item">
          <img
            src="../assets/images/home-tab/scenic.png"
            @click="$router.push('/scenic-input')"
            alt=""
          />
        </div>
        <div class="nav-item">
          <img
            src="../assets/images/home-tab/merchant.png"
            @click="$router.push('/merchant-input')"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="bottom">
      <h1>即时动态</h1>
      <ul>
        <li v-for="(item, index) in logs" :key="index">
          <div class="username">{{ item.username }}</div>
          <p class="content">
            <span>{{ parseContent1(item.content, item.typ) }}</span>
            <span class="link" @click="lookDetail(item.content, item.typ)">{{
              parseContent2(item.content, item.typ)
            }}</span>
            <span>{{ parseContent3(item.content, item.typ) }}</span>
          </p>
          <p class="time">
            {{
              new Date(item.created_at * 1000).getMonth() +
                1 +
                "月" +
                new Date(item.created_at * 1000).getDate() +
                "日"
            }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      logs: [],
      countObj: {},
      timer: null,
    };
  },
  created() {
    this.getUserData();
    this.getLogData();
    this.getCount();
    this.timer = setInterval(() => {
      this.getLogData();
      this.getCount();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getUserData() {
      let username = window.localStorage.getItem("username");
      axios
        .get("http://47.97.229.24:9080/v1/user/get?username=" + username)
        .then((res) => {
          this.username = res.data.username;
        });
    },
    getLogData() {
      axios.get("http://127.0.0.1:9080/v1/log/list").then((res) => {
        this.logs = res.data.data;
      });
    },
    getCount() {
      axios.get("http://47.97.229.24:9080/v1/count").then((res) => {
        this.countObj = res.data.data;
      });
    },
    lookDetail(content, typ) {
      let obj = content + "";
      obj = JSON.parse(obj);
      if (typ == 1) {
        this.$router.push("/project-input?id=" + obj.id);
      } else if (typ == 2) {
        this.$router.push("/project-input?id=" + obj.id);
      } else if (typ == 11) {
        this.$router.push("/scenic-input?id=" + obj.id);
      } else if (typ == 12) {
        this.$router.push("/scenic-input?id=" + obj.id);
      } else if (typ == 21) {
        this.$router.push("/merchant-input?id=" + obj.id);
      } else if (typ == 22) {
        this.$router.push("/merchant-input?id=" + obj.id);
      }
    },
    parseContent1(content, typ) {
      let obj = content + "";
      obj = JSON.parse(obj);
      if (typ == 1) {
        return "更新了";
      } else if (typ == 2) {
        return "添加了";
      } else if (typ == 11) {
        return "更新了";
      } else if (typ == 12) {
        return "添加了";
      } else if (typ == 21) {
        return "更新了";
      } else if (typ == 22) {
        return "添加了";
      } else if ((typ = 32)) {
        return "发布了";
      }
    },
    parseContent2(content, typ) {
      let obj = content + "";
      obj = JSON.parse(obj);
      if (typ == 1) {
        return obj.customer_name;
      } else if (typ == 2) {
        return obj.customer_name;
      } else if (typ == 11) {
        return obj.scenic_name;
      } else if (typ == 12) {
        return obj.scenic_name;
      } else if (typ == 21) {
        return obj.merchant_name;
      } else if (typ == 22) {
        return obj.merchant_name;
      } else if (typ == 32) {
        return obj.title;
      }
    },
    parseContent3(content, typ) {
      let obj = content + "";
      obj = JSON.parse(obj);
      if (typ == 1) {
        return "的项目信息";
      } else if (typ == 2) {
        return "的项目信息";
      } else if (typ == 11) {
        return "的景区信息";
      } else if (typ == 12) {
        return "的景区信息";
      } else if (typ == 21) {
        return "的商户信息";
      } else if (typ == 22) {
        return "的商户信息";
      } else if (typ == 32) {
        return "的公告";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  margin-bottom: 60px;
  .top {
    position: relative;
    background: #00bf8b;
    padding-top: 10px;
    height: 3rem;
    overflow: visible;
    border-radius: 0 0 20px 20px;
    h1 {
      padding-left: 0.35rem;
      text-align: left;
      font-size: 0.6rem;
      color: #fff;
    }
    .banner {
      position: absolute;
      box-shadow: 0 0 15px 2px #ccc;
      top: 55%;
      left: 50%;
      transform: translateX(-50%);
      width: 6.3rem;
      background: #fff;
      font-size: 0.4rem;
      border-radius: 0.2rem;
      padding: 0.3rem;
      .title {
        text-align: left;
        margin-bottom: 5px;
        font-size: 0.5rem;
        font-weight: 700;
        span {
          font-size: 0.3rem;
          font-weight: 400;
        }
      }
      .infos {
        display: flex;
        justify-content: space-around;
        .info {
          .num {
            font-size: 0.5rem;
            font-weight: 600;
          }
          .label {
            font-size: 0.4rem;
            color: #00bf8b;
          }
        }
      }
    }
  }
  .middle {
    margin-top: 2rem;
    .nav {
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-around;
      .nav-item {
        img {
          width: 1.5rem;
        }
      }
    }
  }
  .bottom {
    h1 {
      margin: 0;
      margin-bottom: 0.2rem;
      font-size: 0.5rem;
      font-weight: 700;
      text-align: left;
      padding-left: 0.35rem;
    }
    ul {
      margin: 0;
      padding: 0;
      margin-left: 0.35rem;
      li {
        margin: 0;
        margin-bottom: 0.1rem;
        list-style: none;
        text-align: left;
        .username {
          font-size: 0.45rem;
          font-weight: 700;
        }
        .content {
          margin: 0;
          font-size: 0.38rem;
          color: #00bf8b;
          .link {
            border-bottom: 1px solid #00bf8b;
          }
        }
        .time {
          margin: 0;

          font-size: 0.35rem;
          color: #a9e4d4;
        }
      }
    }
  }
}
</style>
