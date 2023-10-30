<template>
    <div class="feedback-block">
      <feedbacks>
        <feedback>
          <template v-slot:name>Имя Фамилия</template>
          <template v-slot:datetime>31.12.2023 23:59:59</template>
          <img src="./imgs/good.svg">
          <template v-slot:feedback-text>
            velit sed ullamcorper morbi tincidunt ornare ...
          </template>
        </feedback>
        <feedback>
          <template v-slot:name>Имя Фамилия</template>
          <template v-slot:datetime>31.12.2023 23:59:59</template>
          <img src="./imgs/good.svg">
          <template v-slot:feedback-text>
            velit sed ullamcorper morbi tincidunt ornare ...
          </template>
        </feedback>
        <feedback>
          <template v-slot:name>Имя Фамилия</template>
          <template v-slot:datetime>31.12.2023 23:59:59</template>
          <img src="./imgs/good.svg">
          <template v-slot:feedback-text>
            velit sed ullamcorper morbi tincidunt ornare ...
          </template>
        </feedback>
        <feedback>
          <template v-slot:name>Имя Фамилия</template>
          <template v-slot:datetime>31.12.2023 23:59:59</template>
          <img src="./imgs/good.svg">
          <template v-slot:feedback-text>
            velit sed ullamcorper morbi tincidunt ornare ...
          </template>
        </feedback>
        <feedback>
          <template v-slot:name>Имя Фамилия</template>
          <template v-slot:datetime>31.12.2023 23:59:59</template>
          <img src="./imgs/good.svg">
          <template v-slot:feedback-text>
            velit sed ullamcorper morbi tincidunt ornare ...
          </template>
        </feedback>
        <feedback>
          <template v-slot:name>Имя Фамилия</template>
          <template v-slot:datetime>31.12.2023 23:59:59</template>
          <img src="./imgs/good.svg">
          <template v-slot:feedback-text>
            velit sed ullamcorper morbi tincidunt ornare ...
          </template>
        </feedback>
        <feedback>
          <template v-slot:name>Имя Фамилия</template>
          <template v-slot:datetime>31.12.2023 23:59:59</template>
          <img src="./imgs/good.svg">
          <template v-slot:feedback-text>
            velit sed ullaигаегшщваегывorper morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbimorbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi morbimorbi  tincidunt ornare ...
          </template>
        </feedback>
      </feedbacks>
      <stats>
        <div style="font-size: 24px; text-align: center; margin-top: 20px;">Статистика</div>
        <div style="font-size: 24px; margin-top: 20px;">Положительных: 1293</div>
        <div style="font-size: 24px; margin-top: 20px;">Отрицательных: 123</div>
        <div style="font-size: 24px; text-align: center; margin-top: 50px; margin-bottom: 25px;">Оставьте свой отзыв - мы будем вам очень благодарны!</div>
        <btn @click="modals.showModal('review')">Оставить отзыв</btn>
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
        modals: modalStore()
    }
  }
}
</script>
