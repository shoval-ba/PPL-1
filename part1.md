## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
   This approach is like a list of instructions for the computer. It uses loops and variables that change over time to tell the computer exactly how to do something step-by-step.
   1. [5 points] Object Oriented
   This paradigm groups data and functions into "objects". It's used to model real-world things by keeping their information and their actions together in one place.
   1. [5 points] Functional
   We use pure functions that don't change any data outside of them. Instead of loops, we use mathematical-like operations to process data without changing the original state
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
OOP improves organization by grouping related data and functions together into single units called objects. Instead of having variables and logic spread out across the entire program, everything belongs to a specific entity. This makes the code much cleaner, easier to understand, and simpler to reuse in different parts of the project.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?
Functional programming makes the code more predictable because it avoids "side effects". Since data is immutable, you don't have to worry about one part of the program accidentally breaking another part's data. This also makes testing much easier.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

our answer:
```ts
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
  const discounted = inventory.filter(p => p.discounted);

  if (discounted.length === 0) {
    return 0;
  }

  const totalPrice = discounted
    .map(p => p.price)
    .reduce((acc, price) => acc + price, 0);

  return totalPrice / discounted.length;
};
```

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
(T[] * (T -> boolean)) -> boolean
2. [3 points] `x => x.map(y => y * 2)`
number[] -> number[]
3. [3 points] `(x, y) => x.filter(y)`
(T[] * (T -> boolean)) -> T[]
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
number[] -> number
5. [3 points] `(x, y) => x ? y[0] : y[1]`
(boolean * T[]) -> T
6. [3 points] `(f,g) => x => f(g(x+1))`
((U -> V) * (number -> U)) -> (number -> V)
