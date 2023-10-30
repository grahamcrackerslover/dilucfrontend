<template>
    <header>
      <img class="logo" src="./icons/logo.svg" alt="Logo">
      <div>
        <span class="header_spans" @click="() => {scrollMeTo('reviews')}">Отзывы</span>
        <span class="header_spans" @click="() => {scrollMeTo('about_us')}">О нас</span>
      </div>
    </header>
</template>
  
<style scoped>

</style>

<script>


export default {
    name: 'HeaderComponent',
    methods: {
      scrollMeTo(refName) {
        var element = this.$parent.$root.$refs[refName];
        console.log(this.$parent)
        var top = element.offsetTop;

        window.scrollTo(0, top);
      },
    }
}
</script>
