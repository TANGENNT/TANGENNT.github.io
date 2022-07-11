# [`isUnion`](https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md)

## Question

Determine whether given type is an union type?

## Solution

```typescript
type IsUnion<T, K = T> = [T] extends [never]
  ? false
  : T extends K
  ? [K] extends [T]
    ? false
    : true
  : never;
```

## Explanation

It is divided into two parts:

1. exclude `never` first
2. then check union using [Distributive Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)
   - Union type is break up into single basic type.
   - Single basic type is assignable to union type, but not the reverse.
