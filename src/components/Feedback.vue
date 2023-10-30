<template>
    <div class="feedback">
      <div>
        <name><slot name="name"></slot></name>
        <datetime><slot name="datetime"></slot></datetime>
        <img :src="imgSrc" style="position: relative; top: 5px; right: 5px">
      </div>
      <feedback-text><slot name="feedback-text"></slot></feedback-text>
    </div>
  </template>
  
<style scoped>

</style>

<script setup>
import imgSrc from './imgs/good.svg'
</script>