import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './child'

function App() {
  const [count, setCount] = useState(0)
  const [countsec, setCountsec] = useState(0)

//  let numbers = new Array(16_00_000).fill(0).map((_,i)=>{
//     return{
//       index: i,
//       ismagical: i=== 14_00_000
//     }    
//   })
  // let magical = numbers.find(num=>num.ismagical===true)
  // let magical = useMemo(()=>numbers.find(num=>num.ismagical===true),[]);
  let func = useCallback(()=>{
    console.log("practiceing usecallback")
  },[countsec])
  return (
    <>
      <div>
        <Child count = {countsec} func={func}  /> 
        {/* <h1>{magical.index}</h1> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountsec((countsec) => countsec + 1)}>
          count is {countsec}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
