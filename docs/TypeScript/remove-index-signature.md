# [`RemoveIndexSignature`](https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md)

## Question

Exclude [_Index Signature_](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) from an object.

## Solution

```typescript
type RemoveIndexSignature<T extends object> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K];
};
```

## Explanation

First of all, we need to understand what [_Index Signature_](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) is.

- It is like `[K: string | number | symbol]: infer V` in an object type.
- It means that the result type is `V` when the specified object type is indexed with `string | number | symbol`.
- And any other keys' value type need to be assignable to `V`.

::: warning
An index signature property type must be either ‘string’ or ‘number’ (or 'symbol').
:::

In summary, what we need to do is to filter `keyof T`, excluding type `string`, `number` or `symbol`.
