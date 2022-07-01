import { INCRMENT, DECRMENT, RESET } from "../constants/counterConst";

const initialCounter = {
    count: 0
}

 const counterReducer = (state = initialCounter, action) => {


    switch (action.type) {
        case INCRMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECRMENT:
            return{
                ...state,
                count: state.count - 1
            }
        case RESET:
            return{
                ...state,
                count: 0
            }
            
    
        default:
            return state;
    }
};

export default counterReducer;