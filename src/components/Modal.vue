<script setup>

</script>

<template>
    <Transition name="fade">
        <div class="modal" v-if="modalStores.isModalShown('review')">
            <div class="modal-content">
                <div class="modal-content_top">
                    <div class="modal-content_title">Отзыв</div>
                    <div class="modal-content_close" v-on:click="modalStores.hideModal('review')">
                        X
                    </div>
                </div>

                <div class="modal-content_body">
                    <div class="review">
                        <div>
                          <textarea v-model="reviewText" placeholder="Текст отзыва"/>
                        </div>
                        <div>
                        <input style="min-width:140px; min-height:10px;height:14%;width:40%; background-color: gray; border-width: 1px; border-color: whitesmoke; border-radius: 10px;" v-model="codeText" placeholder="Ваш код для отзыва"/><br/>
                        <input style="min-width:140px; min-height:10px;height:14%;width:40%; background-color: gray; border-width: 1px; border-color: whitesmoke; border-radius: 10px;" v-model="nameText" placeholder="Ваше имя"/><br/>
                        <input style="color: white;" type="radio" id="yes" name="yes" value="yes" v-model="radioCheck" />
                        <label style="color: white;" for="yes">Позитивный</label><br />
                        <input style="color: white;" type="radio" id="no" name="no" value="no" v-model="radioCheck" />
                        <label style="color: white;" for="no">Негативный</label><br />
                        </div>
                    </div>
                </div>
                <btn @click="send_review(nameText, reviewText, codeText, radioCheck === 'yes')">Отправить</btn>
            </div>
        </div>
    </Transition>
</template>

<script>
import {modalStore} from '@/store/modal';
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
    display: flex;
  textarea {
    display: flex;
    width: 100%;
    min-width: 400px;
    min-height: 200px;
    font-family: sans-serif;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    box-sizing: border-box;
    padding: 10px 9px;
    color: #5f5a5a;

    &::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      opacity: 0.3;
    }

    @media(max-width: 500px) {
      min-width: 100px;
      width: 100%;
    }
  }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
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
  padding:0;
  margin:0;
  top:0;
  left:0;
  min-width: 100%;
  min-height: 100%;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(20px);
  z-index: 99;

  &-content {
    display: flex;
    flex-direction: column;
    background: black;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 25px;
    gap: 30px;
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
      color: white;
      font-size: 30px;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>