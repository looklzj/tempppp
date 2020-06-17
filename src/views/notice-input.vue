<template>
  <div>
    <mt-field
      placeholder="标题"
      v-model="title"
    ></mt-field>
    <mt-field
      placeholder="内容"
      type="textarea"
      rows="4"
      v-modal="content"
    ></mt-field>
  </div>
</template>
<script>
import { Field } from "mint-ui";
export default {
  components: {
    Field
  },
  data() {
    return {
        title:"",
        content:"",
    };
  }
};
</script>
<style lang="scss" scoped>
</style>