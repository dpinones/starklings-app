import { ICompilationResult } from "../types/compilation";
import { runCairoCode } from "./runCairoCode";

export const runStarknetContract = (code: string): ICompilationResult => {
  console.log('running contract')
  return runCairoCode(code, 'CONTRACT')
}

