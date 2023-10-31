<script setup>

</script>

<template>
    <Transition name="fade">
        <div class="modal" v-if="modalStores.isModalShown('review')">
            <div class="modal-content">
                <div class="modal-content_top">
                    <div class="modal-content_title">Написать отзыв</div>
                    <div class="modal-content_close" v-on:click="modalStores.hideModal('review')">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="white"
                                    d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"/>
                        </svg>
                    </div>
                </div>

                <div class="modal-content_body">
                    <div class="review">
                        <textarea v-model="reviewText" placeholder="Текст отзыва"/>
                        <input style="min-width:140px; min-height:10px;height:10%;width:40%; background-color: gray; border-width: 1px; border-color: whitesmoke; border-radius: 5px;" v-model="codeText" placeholder="Ваш код для отзыва"/><br/>
                        <input style="min-width:140px; min-height:10px;height:10%;width:40%; background-color: gray; border-width: 1px; border-color: whitesmoke; border-radius: 5px;" v-model="nameText" placeholder="Ваше имя"/><br/>
                        <input style="color: white;" type="radio" id="yes" name="yes" value="yes" v-model="radioCheck" />
                        <label style="color: white;" for="yes">Позитивный</label><br />
                        <input style="color: white;" type="radio" id="no" name="no" value="no" v-model="radioCheck" />
                        <label style="color: white;" for="no">Негативный</label><br />
                    </div>
                </div>
                <btn @click="send_review(nameText, reviewText, codeText, radioCheck === 'yes')">Отправить</btn>
            </div>
        </div>
    </Transition>
</template>

<script>
import {modalStore} from '@/store/modal'; // Импортируем хранилище
import Btn from './Btn.vue';
import axios from "axios"
import { SERVER_URL } from "../config";


export default {
    components: {
        Btn
    },
    data() {
        return {
            modalStores: modalStore(),
            reviewText: null,
            codeText: null,
            nameText: null,
            radioCheck: null,
        }
    },
    methods: {
        send_review(name, content, code_used, is_positive) {
            axios({
                method: "post",
                url: SERVER_URL + `/reviews/add/`,
                data: {name, code_used, content, is_positive}
            })
            .then((r) => {
                if (r.status != 201) {
                    alert("Что-то пошло не так...")
                } else {
                    alert("Успешно!");
                    this.modalStores.hideModal("review")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.review {
  textarea {
    display: flex;
    width: 100%;
    min-width: 300px;
    min-height: 200px;
    font-family: 'Gilroy', sans-serif;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    box-sizing: border-box;
    padding: 17px 10px;
    color: #6a6a6a;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      opacity: 0.4;
    }

    @media(max-width: 500px) {
      min-width: 100px;
      width: 100%;
    }
  }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
    min-width: 100%;
    min-height: 100%;
  background: rgba(19, 19, 19, 0.9);
  backdrop-filter: blur(17.5px);
  z-index: 99;

  &-content {
    display: flex;
    flex-direction: column;
    background: black;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 17px;
    box-sizing: border-box;
    padding: 25px;
    gap: 35px;
      overflow: hidden;
    @media(max-width: 400px) {
      max-width: 300px;
      gap: 20px;
    }

    &_body {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &_title {
      display: flex;
      font-weight: 700;
      font-size: 34px;
      line-height: 41px;
      color: white;
      @media(max-width: 400px) {
        font-size: 30px;
        line-height: 38px;
      }
    }

    &_close {
      display: flex;
      opacity: 0.2;
      transition: opacity 0.3s ease;
      padding: 10px;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>