<template>
    <div class="feedback-block">
      <feedbacks>
        <div v-if="reviews_text">
          <p>{{reviews_text}}</p>
        </div>
        <div v-for="review in reviews">
          <feedback :is_positive="review.is_positive">
            <template v-slot:name>{{ review.name }}</template>
            <template v-slot:datetime>{{ review.created_at.toString() }}</template>
            <template v-slot:feedback-text>
              {{ review.content }}
            </template>
          </feedback>
        </div>
      </feedbacks>
      <stats>
        <div style="font-size: 24px; text-align: center; margin-top: 20px;">Статистика</div>
        <div v-if="stats_text">{{ stats_text }}</div>
        <div v-else>
          <div style="font-size: 24px; margin-top: 20px;">Положительных: {{ positive_reviews }}</div>
          <div style="font-size: 24px; margin-top: 20px;">Отрицательных: {{ negative_reviews }}</div>
          <div style="font-size: 24px; text-align: center; margin-top: 50px; margin-bottom: 25px;">Оставьте свой отзыв - мы будем вам очень благодарны!</div>
          <btn @click="modals.showModal('review')">Оставить отзыв</btn>
        </div>
      </stats>
    </div>
</template>

<style scoped>

</style>

<script>
import Feedback from './Feedback.vue';
import Feedbacks from './Feedbacks.vue';
import Btn from './Btn.vue';
import Stats from './Stats.vue';
import {modalStore} from "@/store/modal";
import api from "../apiCaller"

export default {
  components: {
    Feedback,
    Feedbacks,
    Btn,
    Stats,
  },
  methods: {

  },
  data() {
    return {
        modals: modalStore(),
        reviews: [],
        reviews_text: "",
        positive_reviews: 0,
        negative_reviews: 0,
        stats_text: "",
    }
  },
  mounted() {
     api.get("reviews/get/").then((response) => {this.reviews = response.data.reviews}).catch((r) => {r.response.status === 404? this.reviews_text="Отзывов пока нет!" : this.reviews_text="Произошла ошибка в подгрузке отзывов..."})
     api.get("reviews/stats/").then((response) => {this.positive_reviews = response.data.positive_reviews; this.negative_reviews = response.data.negative_reviews}).catch((r) => {this.stats_text="Произошла ошибка в подгрузке статистики..."})
  }
}
</script>
