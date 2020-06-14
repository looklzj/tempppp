<template>
  <div class="home">
    <div class="top">
      <h1 class="username">管理员</h1>
      <div class="banner">
        <div class="title">信息录入<span>（本周）</span></div>
        <div class="infos">
          <div class="info">
            <div class="num">+77</div>
            <div class="label">项目</div>
          </div>
          <div class="info">
            <div class="num">+77</div>
            <div class="label">项目</div>
          </div>
          <div class="info">
            <div class="num">+77</div>
            <div class="label">项目</div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="nav">
        <div class="nav-item">
          <img
            src="../assets/images/home-tab/project.png"
            alt=""
          >
        </div>
        <div class="nav-item">
          <img
            src="../assets/images/home-tab/scenic.png"
            alt=""
          >
        </div>
        <div class="nav-item">
          <img
            src="../assets/images/home-tab/merchant.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="bottom">
      <h1>即时动态</h1>
      <ul>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
        <li>
          <div class="username">小二</div>
          <p class="content">添加了成都欢乐谷乐园的景区信息</p>
          <p class="time">5月26日</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.home {
  margin-bottom: 60px;
  .top {
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
      box-shadow: 0 0 15px 2px #ccc;
      margin: 0 auto;
      width: 6.5rem;
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