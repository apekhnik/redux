import { ERROR_IS_OFF, ERROR_IS_ON } from "./types"
const initialState={
    error: false
}

export const errorReducer = (state=initialState, action) => {
    switch (action.type) {
        case ERROR_IS_ON:
            return{...state, error: true, text: action.text}
        case ERROR_IS_OFF:
            return{...state, error: false, text: action.text}
        default:
            return state
    }
}