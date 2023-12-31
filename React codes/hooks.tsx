// useId... for label and input

import React, { useEffect, useState, useRef } from 'react';
import { useId } from 'react';

function App() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>name</label>
      <input type="text" id={id} />
    </div>
  );
}

function MyComponent() {
  const [value, setValue] = useState('initial');
  const renderCount = useRef<number>(1);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <h1>count render {renderCount.current}</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default MyComponent;
