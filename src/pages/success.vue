<script lang="ts" setup>
</script>

<template>
    <h3 style="color: whitesmoke;">Спасибо за покупку, оставьте отзыв, если хотите. Ваш код для отзыва: {{ review_code }}</h3>
</template>

<script lang="ts">
export default {
    name: 'success',
    data() {
        return {
            review_code: ""
        }
    },
    created() {
        this.review_code = this.$route.query.review_code;  
    }
}
</script>

<style scoped>

</style>