import {
  compileCairoProgram,
  compileStarknetContract,
  runTests,
} from "../pkg/module/wasm-cairo";
import { ICompilationResult } from "../types/compilation";
import { Append } from "../types/exercise";
import { antiCheatAppend } from "./antiCheat";

export const runCairoCode = (
  code: string,
  mode: "COMPILE" | "TEST" | "CONTRACT",
  append?: Append
): ICompilationResult => {
  let result;
  const antiCheatCode = antiCheatAppend(code, append);
  if (mode === "TEST") {
    result = runTests(
      antiCheatCode,
      false,
      "",
      false,
      false,
      false,
      "",
      false,
      false
    );
  } else if (mode === "CONTRACT") {
    result = compileStarknetContract(antiCheatCode, true, false);
  } else {
    result = compileCairoProgram(antiCheatCode, false);
  }
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
