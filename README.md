# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug involving an infinite loop caused by improper usage of the `useEffect` hook.  The `useEffect` hook, while powerful, requires careful consideration of its dependency array to avoid unexpected behavior.

## Bug Description
The provided `MyComponent` uses `useEffect` to log the current count and increment it. However, because `setCount(count + 1)` is called within the effect and `count` is in the dependency array, this creates an infinite loop: the effect triggers a state update, causing a re-render, which triggers the effect again, and so on.

## Solution
The solution involves correctly managing the dependency array to avoid this behavior. The dependency array determines when the effect is triggered.  If it's empty (`[]`), the effect runs only after the initial render. If it contains variables, the effect runs whenever those variables change.