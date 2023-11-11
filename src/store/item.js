import { defineStore } from 'pinia';

export const itemStore = defineStore({
    id: 'itemStore',
    state: () => ({
        modals: {
            item_id: null,
            is_processing: false,
        }
    }),
    actions: {
        setItemId(value) {
            this.modals["item_id"] = value;
        }
    },
    getters: {
        getItemId: (state) => () => {
            return state.modals["item_id"];
        }
    }
});
