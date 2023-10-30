<template>
    <div class="card-block">
        <card
        v-for="(card, index) in cards"
        :key="index"
        :header="card.header"
        :info="card.info"
        ></card>
    </div>
</template>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  
<script>
import Card from './Card.vue';

export default {
components: {
    Card,
},
data() {
    return {
    cards: [
        {
        header: 'Лучшие цены',
        info: 'Мы продаем все предметы по лучшей возможной цене! Если найдете выгоднее, получите скидку в 50% на любой товар!',
        },
        {
        header: 'Быстрые выводы',
        info: 'Вывод предметов с нашего сайта происходит практически моментально! Стоит Вам оформить заказ, предмет, он будет у Вас на аккаунте в течении минуты!',
        },
        {
        header: 'Поддержка 24/7',
        info: 'Наши специалисты ответят на любой Ваш вопрос, в том числе помогут с оформлением заказа, оплатой или чем-либо еще. Мы всегда на связи!',
        },
    ],
    };
},
}
</script>
