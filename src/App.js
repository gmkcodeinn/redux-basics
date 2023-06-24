import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { decrementCount, incrementCount } from './store/store';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount(2));
  };

  const handleDecrement = () => {
    dispatch(decrementCount(3));
  };

  return (
    <div className='App'>
      <button onClick={handleIncrement}>Increment</button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
