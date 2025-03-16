import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        user: {},
		lang:'',
		PLplay: false
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        },
    },
});

export default useCounterStore