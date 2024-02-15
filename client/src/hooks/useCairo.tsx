import { useEffect } from "react";
import __wbg_init from "../pkg/module/wasm-cairo";
import { compileCairoCode } from "../utils/compileCairoCode";

export const useCairo = () => {
    useEffect(() => {
        __wbg_init();
      }, []);
    const compile = compileCairoCode
    return {
        compile
    }
}