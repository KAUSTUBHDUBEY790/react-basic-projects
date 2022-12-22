import React, { useState } from 'react';

const Tour = ({id,image,info,name,price,removetour}) => {
  const [set,readmore] = useState(false);
  return (
    <article className='single-tour' key={id}>
      <img src={image} alt={name}/>
      <footer>

      <div className='tour-info'>      <h3>{name}</h3>        <h4 className='tour-price'>${price}</h4></div>
      <p>{set?info:`${info.substring(0,200)}`}...<button onClick={()=> readmore(!set)}>{set?'read less':'read more'}</button></p>
      <button className='delete-btn' onClick={()=>removetour(id)}>Not Interested</button>

      </footer>
    </article>
    
  )
};

export default Tour;
