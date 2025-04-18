import { defineStore } from "pinia"
import { type DataList, type DataItem } from "@/interfaces"

interface BoardStore {
  itemModel: DataItem
  list: DataList
}

export const useBoardStore = defineStore("board", {
  state: (): BoardStore => {
    return {
      itemModel: {
        id: '',
        type: '',
        value: '',
        page: ''
      },
      list: [

      ],
    };
  },
  actions: {
    addElement(el: any) {
      this.list.push({...el, id: crypto?.randomUUID()})
    },
    removeElement(id: string) {
      const updateList = this.list.filter(el => el.id !== id)
      this.list = updateList
    },
  },
})