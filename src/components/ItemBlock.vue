<script lang="ts" setup>
import { SERVER_URL } from "../config";
</script>


<template>
    <div>{{ review_code }}</div>
    <div v-if="items[0].id == -1">
        Loading...
    </div>
    <div v-else>
        <div class="items-block">
            <item
                v-for="item in items"
                :key="item.id"
                :item-name="item.title"
                :item-image-src="SERVER_URL + item.image"
                :item-cost="Number(item.price)"
                @click="buyItem(item.id)"
            ></item>
        </div>
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
            }],
            review_code: null
        }
    },
    mounted() {
        api.get("/shop/items/").then(response => {this.items = response.data})
    },
    methods: {
        buyItem(id: Number) {
            api.post(`/shop/buy/`, {item_id: id}).then(response => {this.review_code = response.data.review_code})
        }
    }
}
</script>
