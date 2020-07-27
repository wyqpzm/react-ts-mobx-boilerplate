import { observable, action } from 'mobx'

class GlobalStore {
    @observable username = 'wing'

    @action
    changeUserName = (name: string) => {
        this.username = name
    }
}

export const globalStore = new GlobalStore()
