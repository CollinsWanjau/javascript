# Hooks

## References

### use(resource)

use is a React Hook that lets you read the value of a resource like a Promise or context.

```jsx
import { use } from 'react';

function MessageComponent() {
    const message = use(messagePromise);
    const theme = use(ThemeContext);
}
```
* `use` can be called within loops and conditional statements like `if` and `for` loops.
* Like other React Hooks, the function that calls use must be a Component or Hook.
* `use` can be called within other Hooks.

### Usage

* `use` can be called within loops and conditional statements like `if` and `for` loops.

```jsx
import { use } from 'react';

function Button() {
    const theme = use(ThemeContext);
}
```

