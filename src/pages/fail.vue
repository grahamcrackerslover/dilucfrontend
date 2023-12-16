<script lang="ts" setup>
</script>

<template>
    <h3 style="color: whitesmoke;">Не удалось купить предмет с айди {{ invid }}.</h3>
</template>

<script lang="ts">
export default {
    name: 'fail',
    data() {
        return {
            invid: "",
        }
    },
    created() {
        this.invid = this.$route.query.invid;  
    }
}
</script>

<style scoped>

</style>