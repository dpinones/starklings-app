import {
  compileCairoProgram,
  compileStarknetContract,
  runTests,
} from "../pkg/module/wasm-cairo";
import { ICompilationResult } from "../types/compilation";

export const runCairoCode = (
  code: string,
  mode: "COMPILE" | "TEST" | "CONTRACT"
): ICompilationResult => {
  let result;
/*   if (mode === "TEST") {
    console.log("running test");
    result = runTests(code, false, "", false, false, false, "", false, false);
  } else if (mode === "CONTRACT") {
    result = compileStarknetContract(code, true, false);
  } else { */
    result = compileCairoProgram(code, false);
  // }
  console.log("result", result);
  if (result.startsWith("failed to compile") || !code || code.trim() === "") {
    return {
      success: false,
      result,
      error: result,
    };
  }
  return {
    success: true,
    result,
  };
};
