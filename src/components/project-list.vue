<template>
  <div class="list">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
      >
        <ul>
          <li
            v-for="(v,k,i) in item"
            :key="i"
            @click="$router.push('/project-input?id='+item.id)"
          >{{v}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return { list: [] };
  },
  methods: {
    toggle(v) {
      this.active = v;
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("http://rechengparty.com:9080/v1/project/list").then(res => {
        if (res.data.code == 200) {
          this.list = res.data.data;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  overflow: scroll;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.35rem;
    display: flex;
    flex-direction: column;
    > li {
      > ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0;
        margin: 0;
        > li {
          word-break: keep-all;
          white-space: nowrap;
          flex: 0 0 3rem;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #00bf8b;
          pointer-events: none;
          &:nth-child(1) {
            display: none;
          }
          &:nth-child(2) {
            pointer-events: unset;
          }
        }
      }
    }
  }
}
</style>