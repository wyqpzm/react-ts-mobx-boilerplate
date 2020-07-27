import { configure } from 'mobx'
import { globalStore } from './globalStore'

configure({
    enforceActions: 'observed',
    computedConfigurable: false,
})
export const stores = {
    globalStore,
}
