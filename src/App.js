import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import {runCairoProgram, compileCairoProgram } from './pkg/module/wasm-cairo'
import __wbg_init from './pkg/module/wasm-cairo'
import { Button, Box, Typography } from '@mui/material';
import Editor from '@monaco-editor/react';
import CircularProgress from '@mui/material/CircularProgress'

const cairoTestProgram = `use debug::PrintTrait;
fn main() {
    'Hello, StarknetAstro!'.print();
}`

function App() {
  const [editorValue, setEditorValue] = useState(cairoTestProgram)
  const [result, setResult] = useState('')

  useEffect(() => {
    __wbg_init() 
  }, [])


  return (
    <div className="App">
      <header className="App-header">

      <Box sx={{width: '100%', mb: 2}}>
        <Editor onChange={(val) => setEditorValue(val)} theme='vs-dark' height="400px" defaultLanguage="rust" defaultValue={editorValue} />
      </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 2}}>
        <Button variant='contained'  onClick={()=> {
          const result = compileCairoProgram(editorValue, false);
          result.startsWith('failed to compile') ? setResult(result) : setResult('Compiled. See console')
          console.log('compile result: ', result)
        }}>
          Compile
        </Button>
        <Button variant='contained' onClick={()=> {
          const result = runCairoProgram(editorValue, undefined, false, false);
          setResult(result)
        }}>
          Run
        </Button>
        </Box>
        <Box>
          {result !== '' && <Typography sx={{textAlign: 'left'}}>{result}</Typography>}
        </Box>
      </header>
    </div>
  );
}

export default App;
