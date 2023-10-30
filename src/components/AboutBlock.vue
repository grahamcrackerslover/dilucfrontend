<template>
    <div class="about-block" :style="{ display: displayStyle, marginTop: marginTop, marginBottom: marginBottom }">
      <span class="about-header">О нас</span>
      <span class="about-text">
        <!-- Your about text goes here -->
        <slot></slot>
      </span>
    </div>
  </template>
  
<style scoped>

</style>

<script>
export default {
    props: {
        displayStyle: String,
        marginTop: String,
        marginBottom: String,
    },
}
</script>
