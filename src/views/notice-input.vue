<template>
  <div>
    <input
      label="标题"
      placeholder="请输入标题"
      v-model="title"
    />
    <textarea
      label="内容"
      placeholder="请输入内容"
      type="textarea"
      rows="4"
      v-modal="content"
    ></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  }
};
</script>
<style lang="scss" scoped>
</style>