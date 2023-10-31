<script lang="ts" setup>
import { SERVER_URL } from "../config";
</script>


<template>
    <div>{{ console.log(SERVER_URL) }}</div>
    <div class="items-block">
    <item
        v-for="item in items"
        :key="item.id"
        :item-name="item.title"
        :item-image-src="SERVER_URL + item.image"
        :item-cost="Number(item.price)"
    ></item>
    </div>
</template>
  
<style scoped>

</style>
  
<script lang="ts">
import Item from './Item.vue';
import api from '../apiCaller';

export default {
    components: {
        Item,
    },
    data() {
        return {
            items: [{
                id: -1,
                title: "Loading...",
                image: "",
                price: 0,
            }]
        }
    },
    mounted() {
        api.get("/shop/items/").then(response => {this.items = response.data})
    }
}
</script>
