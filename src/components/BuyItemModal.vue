<script setup>

</script>

<template>
    <!--{{ modalStores.showModal('buy_item') }}-->
    <Transition name="blur">
        <div class="item-blur" v-if="modalStores.isModalShown('buy_item')">
            <div class="item-content">
                <div class="item-head">
                    <div class="item-title">Купить предмет</div>
                    <div class="item-close_button" v-on:click="modalStores.hideModal('buy_item')">
                        X
                    </div>
                </div>
                <div style="display: flex; text-align: center;">
                    <div style="color: whitesmoke; padding-right: 10px;">Ваш UID</div>
                    <input style="min-width:140px; min-height:10px;height:14%;width:40%; background-color: rgb(66, 66, 66); border-width: 1px; border-color: whitesmoke; border-radius: 3px;" v-model="uidText" placeholder=""/><br/>
                </div>
                <btn @click="buy_item()">Купить</btn>
            </div>
        </div>
    </Transition>
</template>

<script>
import {modalStore} from '@/store/modal';
import {itemStore} from '@/store/item';
import Btn from './Btn.vue';
import axios from "axios"
import { SERVER_URL } from "../config";
import router from "../router";


export default {
    components: {
        Btn
    },
    data() {
        return {
            modalStores: modalStore(),
            itemStores: itemStore(),
            uidText: null,
        }
    },
    methods: {
        buy_item() {
            if (!this.itemStores.is_processing) {
                const id = this.itemStores.getItemId()
                this.itemStores.is_processing = true
                axios({
                    method: "post",
                    url: SERVER_URL + `/shop/buy/`,
                    data: {item_id: id, genshin_uid: this.uidText}
                }).then(response => {router.push(`success?review_code=${response.data.review_code}`); this.itemStores.is_processing = false; this.modalStores.hideModal("buy_item")})
                .catch(response => {alert(`Oops, something went wrong.\n${response.response.data.message? response.response.data.message: "Пожалуйста, обратитесь в поддержку"}`); this.itemStores.is_processing = false})
            } else {
                alert("Wait until the previous order is done.")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
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
  }
  &-body {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
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

  &-close_button {
    display: flex;
    opacity: 0.2;
    transition: opacity 0.2s ease;
    padding: 10px;
    cursor: pointer;
    color: white;
    font-size: 30px;

    &:hover {
      opacity: 0.5;
    }
  }
}


.blur-enter-active,
.blur-leave-active {
    transition: opacity 0.2s ease;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
}


.item-blur {
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
}
</style>