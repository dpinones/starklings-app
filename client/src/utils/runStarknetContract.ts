import { ICompilationResult } from "../types/compilation";
import { Append } from "../types/exercise";
import { runCairoCode } from "./runCairoCode";

export const runStarknetContract = (code: string, append?: Append): ICompilationResult => {
  console.log('running contract')
  return runCairoCode(code, 'CONTRACT', append)
}

