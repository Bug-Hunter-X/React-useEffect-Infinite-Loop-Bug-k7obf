```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render, including the initial render
    console.log('Effect running:', count);
    // Incorrect use of setCount here, will cause an infinite loop
    setCount(count + 1); 
  }, [count]); // This is the dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```