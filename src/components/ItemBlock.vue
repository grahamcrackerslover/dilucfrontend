<template>
    <div class="items-block">
      <item
        v-for="(item, index) in items"
        :key="index"
        :item-name="item.name"
        :item-image-src="item.imageSrc"
        :item-cost="item.cost"
      ></item>
    </div>
</template>
  
<style scoped>

</style>
  
<script>
import Item from './Item.vue';
import itemSvg from './imgs/item.svg'

export default {
    components: {
        Item,
    },
    data() {
        return {
        items: [
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
            {
            name: 'Благословение полой луны',
            imageSrc: itemSvg,
            cost: '1952₸',
            },
        ],
        };
    },
}
</script>
