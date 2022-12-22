import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setloading] = useState(true);
  const [tours,settours] = useState([]);
  const removetour = (id) =>{
    const newtour = tours.filter((tour) => tour.id !== id);
    settours(newtour);
  }
  const fetchTours = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false);
      settours(tours);
      
    } catch (error) {
      setloading(false);
      console.log(error);
      
    }

  }

  useEffect(()=>{
    
    fetchTours();
  },[])
  if(loading)
  {
    return(
    <main>
      <Loading />
    </main>
  )};
  if(tours.length===0)
  {
    return(
      <main>
        <div className='title'>
        <h2>Your Tour</h2>
          <h3>no tours left</h3>
          <button className='btn' onClick={()=> window.location.reload()}>Refresh</button>
        </div>
      </main>
    )
  }
  else{
  return (<main><Tours tours={tours} removetour={removetour}/></main>);}

}

export default App
