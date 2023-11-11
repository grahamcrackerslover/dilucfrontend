import { defineStore } from 'pinia';

export const modalStore = defineStore({
    id: 'modalStore',
    state: () => ({
        modals: {
            review: false,
            buy_item: false,
        }
    }),
    actions: {
        showModal(modalName) {
            this.setModal({ name: modalName, value: true });
        },
        hideModal(modalName) {
            this.setModal({ name: modalName, value: false });
        },
        setModal({ name, value }) {
            this.modals[name] = value;
        }
    },
    getters: {
        isModalShown: (state) => (modalName) => {
            return state.modals[modalName] || false;
        }
    }
});
