<template>
    <div class="item">
      <item-name>{{ itemName }}</item-name>
      <div class="image-wrap">
        <img :src="itemImageSrc" alt="Item Image">
      </div>
      <item-cost>{{ itemCost }}₸</item-cost>
    </div>
</template>
  
<style scoped>

</style>
  
<script>
export default {
    props: {
        itemName: String,
        itemImageSrc: String,
        itemCost: String | Number,
    },
}
</script>
