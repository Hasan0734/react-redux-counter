import { DECRMENT, INCRMENT, RESET } from "../constants/counterConst"

export const incrementCoutner = () => {
    return{
        type: INCRMENT
    }
}
export const decrementCoutner = () => {
    return{
        type: DECRMENT
    }
}
export const resetCoutner = () => {
    return{
        type: RESET
    }
}