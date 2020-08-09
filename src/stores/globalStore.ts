import { observable, action, computed, autorun } from 'mobx'

class GlobalStore {
    @observable amount = 0
    @observable price = 5

    @action
    updateAmount = (num: number) => {
        this.amount = num
    }

    @computed get total() {
        return this.price * this.amount
    }
}

export const globalStore = new GlobalStore()

autorun(() => {
    console.log('count value: ', globalStore.amount)
})
