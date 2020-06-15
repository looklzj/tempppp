<template>
  <div id="app">
    <router-view />
    <tab />
  </div>
</template>
<script>
import Tab from "./components/tab";
export default {
  components: {
    Tab
  },
  mounted() {
    let that = this;
    setInterval(() => {
      let username = window.localStorage.getItem("username");
      if (!username) {
        that.$router.push("/");
      }
      if (username && that.$route.path === "/") {
        that.$router.push("/home");
      }
    }, 1000);
  }
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
