import React, { Component, state, useState } from 'react'
import Counter from './Counter';

const Counters = () => {
    const [state, setState] = useState({
        counters: [
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
        ]
    });

    function handleIncrement(counter) {
        console.log(counter);
    }

    function handleReset() {
        const counters = state.counters.map(c => {
            c.value = 0;
            return c;
        });
        setState({ counters })
    };

    function handleDelete(counterId) {
        const counters = state.counters.filter(c => c.id !== counterId)
        setState({ counters: counters });
    }

  return (
    <div>
        <button
        onClick={handleReset} className='btn btn-primary btn-sm m-2'>Reset</button>
      { state.counters.map(element => (
      <Counter 
      key={element.id} 
      onDelete={handleDelete} 
      onIncrement={handleIncrement}
      value={element.value} 
      id={element.id}
      />)) }
    </div>
  )
}

export default Counters
