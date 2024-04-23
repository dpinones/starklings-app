import { runTests } from "../pkg/module/wasm-cairo";
import { ICompilationResult } from "../types/compilation";
import { runCairoCode } from "./runCairoCode";

export const testCairoCode = (code: string): ICompilationResult => {
  return runCairoCode(code, 'TEST')
};
