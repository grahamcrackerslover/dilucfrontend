<template>
    <div class="item">
      <item-name>{{ itemName }}</item-name>
      <img :src="itemImageSrc" alt="Item Image">
      <item-cost>{{ itemCost }}</item-cost>
    </div>
</template>
  
<style scoped>

</style>
  
<script>
export default {
    props: {
        itemName: String,
        itemImageSrc: String,
        itemCost: String,
    },
}
</script>
