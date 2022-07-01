import { useDispatch, useSelector } from 'react-redux';
import { incrementCoutner, decrementCoutner, resetCoutner } from '../services/actions/counterAction';

const Counter = () => {
   const {count} = useSelector( state => state)

   const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCoutner())
    }
    const handleDecrement = () => {
        if (count > 0) {
            dispatch(decrementCoutner())
        }
    }
    const handleReset = () => {
        dispatch(resetCoutner())
    }

    return (
        <div>
            <h2>Count App</h2>
            
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>  
    );
};

export default Counter;




//1. state - count : 0
//2. actions - increment, decrement, reset
//3. reducers - increment → count => count + 1
// -decrement → count => count - 1
// -reset → count => 0
//4. store
//5. providing store in react
//6. use store