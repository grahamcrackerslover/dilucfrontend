<template>
    <div class="card">
      <span class="card_header">{{ header }}</span>
      <span class="card_info">{{ info }}</span>
    </div>
  </template>
  
  <style scoped>
  
  </style>
  
  <script>
  export default {
    props: {
      header: String,
      info: String,
    },
  }
  </script>
  