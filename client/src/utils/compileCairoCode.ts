import { compileCairoProgram } from "../pkg/module/wasm-cairo";
import { ICompilationResult } from "../types/compilation";
import { runCairoCode } from "./runCairoCode";

export const compileCairoCode = (code: string): ICompilationResult => {
  return runCairoCode(code, 'COMPILE')
}

