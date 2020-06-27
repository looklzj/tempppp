<template>
  <div id="app">
    <div v-if="newNotice">
      <el-dialog :title="newNotice.title" :visible.sync="newNotice" width="90%">
        <span>{{ newNotice.content }}</span>
        <i>{{ newNotice.created_at }}</i>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <router-view />
    {{newNotice}}
    <tab />
  </div>
</template>
<script>
import Tab from "./components/tab";

import axios from "axios";
export default {
  components: {
    Tab,
  },
  data() {
    return {
      newNotice: null,
    };
  },
  mounted() {
    this.loginRefresh();
    this.getNewNotice();
  },
  methods: {
    getNewNotice() {
      let that = this;
      setInterval(() => {
        let username = window.localStorage.getItem("username");
        let that2 = that
        axios
          .get("http://127.0.0.1:9080/v1/notice/new?username=" + username)
          .then((res) => {
            that.newNotice=res.data.data
            console.log(that2.newNotice)
          });
      }, 5000);
    },
    readNewNotice() {
      axios.post("http://127.0.0.1:9080/v1/notice/new").then((res) => {
        if (res.data.code == 200) {
        }
      });
    },
    loginRefresh() {
      let that = this;
      let username = window.localStorage.getItem("username");
      if (!username) {
        that.$router.push("/");
      }
      if (username && that.$route.path === "/") {
        that.$router.push("/home");
      }
      setInterval(() => {
        let username = window.localStorage.getItem("username");
        if (!username) {
          that.$router.push("/");
        }
        if (username && that.$route.path === "/") {
          that.$router.push("/home");
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss">
@function pxToRem($px, $base: 16) {
  @return ($px / $base) * 1rem;
}

$html-size: 50;
$font-size-medium: pxToRem(14, $html-size);
$color-text: #5d6768;

$max-width: 1080px;
$min-width: 320px;

html {
  font-size: $html-size + px;
  font-size: $html-size / 3.75 + vw;
}

@media screen and (max-width: 320px) {
  html {
    font-size: $html-size * 320 / 375 + px;
  }
}

@media screen and (min-width: 540px) {
  html {
    font-size: $html-size * 540 / 375 + px;
  }
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
