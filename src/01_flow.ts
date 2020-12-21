import { flow, pipe } from 'fp-ts/lib/function'

import { multiply2, add1 } from './00_pipe'

pipe(1, flow(add1, multiply2, toString))
const result = flow(add1, multiply2, toString)(1) // this is equivalent
console.log(`01_____ flow result ${result} typeof ${typeof result}` ) // 4

