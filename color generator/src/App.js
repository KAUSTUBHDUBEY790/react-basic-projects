import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setcolor] = useState('');
  const [error,seterror] = useState(false);
  const [list,setlist] = useState([]);
  const handlesubmit = (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setlist(colors);
      seterror(false);
      
    } catch (error) {
      seterror(true);
    }


  }
  return (
    <>
    <section className='container'>
      <h3>Color generator</h3>
      <form onSubmit={handlesubmit}>
        <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} placeholder="#fff" className={`${error?'error':null}`}>

        </input>
        <button className="btn" type="submit">Generate</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
      return<SingleColor key={index} {...color} index={index}></SingleColor>})}

    </section>
    </>
  )
}

export default App
