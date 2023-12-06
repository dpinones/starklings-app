import { compileCairoProgram } from "../pkg/module/wasm-cairo";
import { ICompilationResult } from "../types/compilation";

export const compileCairoCode = (code: string): ICompilationResult => {
  const result = compileCairoProgram(code, false);
  if (result.startsWith("failed to compile") || !code || code.trim() === '') {
    return {
      success: false,
      result,
      error: result.replaceAll("\n", "<br />"),
    };
  }
  return {
    success: true,
    result,
  };
};
