import React from 'react';
import data from './data';



  return (
    <>
      {people.map((people) => {
        const {id, age, name, image} = people;
        return(
        <article key={id} className="person">
          <img src={image} alt={name} />
          <div> 
            <h4>{name}</h4>
            <p>{age} years</p>
            <button onClick={remove(id)}>Wished</button>
          </div>

        </article>

      )})
      }
      {/* {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })} */}
    </>
  );
};

export default List;
