<template>
    <div class="feedback">
      <div>
        <name><slot name="name"></slot></name>
        <datetime><slot name="datetime"></slot></datetime>
        <img :src="is_positive? imgGood : imgBad" style="position: relative; top: 5px; right: 5px">
      </div>
      <feedback-text><slot name="feedback-text"></slot></feedback-text>
    </div>
  </template>
  
<style scoped>

</style>

<script setup>
import imgGood from './imgs/good.svg'
import imgBad from './imgs/bad.svg'
</script>

<script>
export default {
  props: {
    is_positive: Boolean,
  }
}
</script>