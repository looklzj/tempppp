<template>
  <div class="login">
    <div class="login-inner">
      <img
        class="logo"
        src="../assets/images/logo/logo-big.jpg"
      >
      <div class="input-wrapper">
        <input
          type="text"
          v-model="username"
          placeholder="用户名"
        />
      </div>
      <div class="input-wrapper">
        <input
          type="password"
          v-model="password"
          placeholder="密码"
        />
      </div>
      <button @click="loginHandler">登录</button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {
    this.$router.push("/home");
  },
  methods: {
    loginHandler() {
      axios
        .post("http://rechengparty.com:9080/v1/user/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          if (res.data.code == 400) {
            Toast({
              message: "账号或密码错误",
              position: "middle",
              duration: 5000
            });
          }
          if (res.data.code == 200) {
            this.$router.push("/home");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: #00bf8b;
  .logo {
    width: 80%;
  }
  input {
    margin: 0 auto;
    display: block;
    width: 6rem;
    height: 1rem;
    font-size: 0.5rem;
    color: #fff;

    border: none;
    outline: none;
    border-bottom: 2px solid #fff;
    background: #00bf8b;
    &::placeholder {
      color: #fff;
    }
  }
  button {
    font-weight: 700;
    font-size: 0.5rem;
    margin-top: 50px;
    background: #00bf8b;
    width: 6rem;
    height: 1rem;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 4rem;
    outline: none;
  }
}
</style>