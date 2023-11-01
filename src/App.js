import Editor from '@monaco-editor/react';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import __wbg_init, { compileCairoProgram, runCairoProgram } from './pkg/module/wasm-cairo';

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

          <Editor onChange={(val) => setEditorValue(val)} theme='vs-dark' height="400px" width='800px' defaultLanguage="rust" defaultValue={editorValue} />

        <Box sx={{ display: 'flex', gap: 2, my: 2}}>
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
