import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { Recap, Total } from '@/types/historyTypes';

export const useHistoryStore = defineStore({
  id: 'history',
  state: () => ({
    todayDate: useStorage('todayDate', '' as string),
    recaps: useStorage('recaps', [] as Recap[]),
    total: useStorage('total', {} as Total)
  }),
  getters: {
    getTodayDate(): string {
      return this.todayDate;
    },
    getRecap(): Recap[] {
      return this.recaps;
    },
    getTotal(): Total {
      return this.total;
    }
  },
  actions: {
    setTodayDate(date: string) {
      this.todayDate = date;
    },
    addRecap(recap: Recap) {
      this.recaps.push(recap);
    },
    removeRecap(index: number) {
      this.recaps.splice(index, 1);
    },
    addToTotal(duration: number, type: string) {
      this.total[type] = this.total[type]
        ? this.total[type] + duration
        : duration;
    }
  }
});
