import { createSlice } from "@reduxjs/toolkit";

interface SymbolType {
    lowerCase: string
    symbol: string
    number: string
    upperCase: string
}
interface intitialStateType {
    chars: string
    len: number
    password: string,
    changeSymbol: Object
}

const initialState = {
    chars: '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    len: 6,
    password: '',
    changeSymbol: {
        lowerCase: 'abcdefghijklmnopqrstuvwxyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        symbol: '!@#$%^&*()',
        number: '0123456789'
    }
}

const generatorSlice = createSlice({
    name: 'generatorSlice',
    initialState,
    reducers: {
        changePassword(state, action) {
            state.password = action.payload
        },
        changeLenghtPassword(state, action) {
            state.len = action.payload
        },
        generatorPassword(state, action) {
            state.password = ''
            let newChars = state.chars
            Object.keys(action.payload).map((item: any) => {
                newChars = newChars.replace(action.payload[item] && state.changeSymbol[item], '')
            })
            for (let i = 1; i <= state.len; i++) {
                let randomNumber = Math.floor(Math.random() * newChars.length);
                state.password += newChars.substring(randomNumber, randomNumber + 1)
            }
        },

    },
})

export const { changePassword, generatorPassword, changeLenghtPassword } = generatorSlice.actions
export default generatorSlice.reducer
