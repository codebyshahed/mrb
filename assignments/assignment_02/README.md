**1) What is JSX, and why is it used?**

- JSX মানে JavaScript XML
- এটা JavaScript এর ভেতরে HTML এর মতো কোড লেখার জন্য ব্যবহৃত হয়

###

**2️) What is the difference between State and Props?**

- Props: Read-only, Change করা যায় না
- State: Change করা যায়

###

**3️) What is the useState hook, and how does it work?**

- `useState` হলো একটা React Hook যেটা functional component এ state ব্যবহার করার সুযোগ দেয়
- How it work's: example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

- `count` হলো current state
- `setCount` হলো state update করার function, এবং
- `0` হলো initial value

###

**4️) How can you share state between components in React?**

- Using Props Drilling / Lift State Up: Common parent component এ state রেখে তারপর props দিয়ে child component এ পাঠানোর মাধ্যমে

###

**5) How is event handling done in React?**

- React এ event handle করা হয় JSX এর মাধ্যমে
- জাভাস্ক্রিপ্ট এ আমরা `addEventListener` এর মাধ্যমে event handle করতাম কিন্তু React এ `onclick` এর মাধ্যমে event handle করা হয়
