import React, { useState } from 'react';
import data from './data';


function App() {
  const [people,setpeople] = useState(data);


  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthday's today</h3>   
        {  
          people.map((people) => {
            const {id, name, age, image} = people;
            return(
              <article key={id} className="person">
                <img src={image} alt={name}></img>
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                
                </div>
               

              </article>
              
            )
          })
        }
        <button onClick={()=>{setpeople([])}}>Clear All</button>
      </section>
    </main>
  )
  
}

export default App;
