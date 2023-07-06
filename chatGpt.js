Certainly! I'll explain `useCallback` and `useMemo` hooks in React with simple examples to make it easier to understand their purposes and usage.

1. `useCallback` Hook:
The `useCallback` hook is used to memoize a function, which means it returns a memoized version of the function that only changes if its dependencies have changed. It is particularly useful when passing callbacks to child components that rely on reference equality to optimize performance.

Example:
```javascript
import React, { useCallback, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array: count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```

In this example, the `handleClick` function is defined using `useCallback`. It takes no arguments and updates the `count` state by incrementing it. By specifying `[count]` as the dependency array, we ensure that the callback function is memoized and recreated only if the `count` value changes. This avoids unnecessary re-renders of child components that receive this callback as a prop.

2. `useMemo` Hook:
The `useMemo` hook is used to memoize a value, which means it returns a memoized version of the value that only changes if its dependencies have changed. It is useful when you have a computationally expensive operation that you want to perform only when necessary.

Example:
```javascript
import React, { useMemo } from 'react';

const MyComponent = () => {
  const expensiveValue = useMemo(() => {
    // Perform a computationally expensive operation
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []); // No dependencies

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
};
```

In this example, the `expensiveValue` is computed using the `useMemo` hook. The provided function performs a computationally expensive operation of summing a large number of integers. By passing an empty dependency array `[]`, we ensure that the value is computed only once during the initial render and remains the same unless the dependencies change. This avoids unnecessary re-computation of the expensive value on subsequent re-renders.

Both `useCallback` and `useMemo` help optimize performance by memoizing functions or values. They are useful in scenarios where you want to avoid unnecessary re-renders or expensive computations.
