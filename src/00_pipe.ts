import { pipe } from 'fp-ts/lib/function'

export function add1(num: number): number {
  return num + 1
}

export function multiply2(num: number): number {
  return num * 2
}

export function toString(num: number): string {
  return `${num}`
}


// const result = pipe(1, add1, multiply2) // '4'

const result = pipe(1, add1, multiply2, toString) // '4'
console.log(`00_____ pipe result ${result} typeof ${typeof result}` ) // 4
