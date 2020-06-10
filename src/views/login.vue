<template>
  <div class="login">
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
    <button>登录</button>
    <router-link>重置密码</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>
<style lang="scss">
.login {
  text-align: center;
  .logo {
    width: 80%;
  }
  input {
    display: block;
  }
}
</style>