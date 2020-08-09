import React, { useContext } from 'react'
import { MobXProviderContext, useObserver } from 'mobx-react'

export const Home = () => {
    const { globalStore } = useContext(MobXProviderContext)
    return useObserver(() => (
        <div>
            <h2>Amount: {globalStore.amount}</h2>
            <h2>Total: {globalStore.total}</h2>
            <button
                onClick={() => {
                    const currentAmount = globalStore.amount
                    globalStore.updateAmount(currentAmount + 1)
                }}
            >
                +
            </button>
        </div>
    ))
}
