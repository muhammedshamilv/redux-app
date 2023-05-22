import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  selectCountAndLetter,
  updateCount
} from './store/countStore/countSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const values = useSelector(selectCountAndLetter);
  const charCount = {};
  const clearData = () => {
    dispatch(updateCount({ count: '', letter: '' }));
  };
  const calculate = () => {
    let maxChar = '';
    let maxCount = 0;
    for (const char of text) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
    dispatch(updateCount({ count: maxCount, letter: maxChar }));
  };
  console.log(values);
  return (
    <div className='App'>
      <h1>Find most repeated character and its count</h1>
      <div className='text'>
        {' '}
        <textarea
          placeholder='enter the string'
          style={{ margin: '10px' }}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button onClick={() => calculate()}> click to perform</button>
        <button onClick={() => clearData()}> clear</button>
      </div>

      <h1>
        Character with the Highest Count "{values?.letter}" Count "
        {values?.count}"
      </h1>
    </div>
  );
}

export default App;
