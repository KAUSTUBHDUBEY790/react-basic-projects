import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setcount]= useState(0);
  const [text,setText]= useState([]);
  const handlesubmit=(e)=>{
    e.preventDefault();
    let amount = parseInt(count);

    setText(data.slice(0,amount));
  }
  return (
  <section className='section-center'>
    <h3>Wana try something new?</h3>
    <form className="lorem-form" onSubmit={handlesubmit}>
    <label htmlFor='amount'>paragraph:</label>
    <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setcount(e.target.value)}>
    </input>
    <button className='btn'>Genrate</button>
    </form>
    <article className='lorem-text'>
      {text.map((item,index)=>{
        return(
        <p key={index}>{item}</p>);
      })}

    </article>

  </section>
    )
}

export default App;
