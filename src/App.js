import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import {
  decrementCount,
  incrementCount,
  searchText,
  submitClicked,
} from './store/store';

function App() {
  const count = useSelector((state) => state.counter.count);
  const searchData = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount(2));
  };

  const handleDecrement = () => {
    dispatch(decrementCount(3));
  };

  const handleInputChange = (e) => {
    dispatch(searchText(e.target.value));
  };

  const handleSubmitClicked = () => {
    dispatch(submitClicked());
  };

  return (
    <div className='App'>
      <button onClick={handleIncrement}>Increment</button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <div>
        <input
          type='text'
          value={searchData.searchText}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmitClicked}>Submit</button>
      </div>
      {searchData.isSubmitClicked && <h1>{searchData.searchText}</h1>}
    </div>
  );
}

export default App;
