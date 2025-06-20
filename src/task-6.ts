function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Явне задання типів при виклику
const num = getFirstElement<number>([1, 2, 3]); // тип: number
const str = getFirstElement<string>(["a", "b", "c"]); // тип: string
const bool = getFirstElement<boolean>([true, false]); // тип: boolean

// ✅ Правильний спосіб — явно задати об'єднаний тип:
const mixed = getFirstElement<number | string | boolean>([1, "a", true]); // тип: number | string | boolean
