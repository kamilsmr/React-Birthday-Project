import React from 'react';

const List = ({people}) => {
    console.log("people", people);
    return (
        <>
             {people ? people.map((person) => {
               
                return(
                    <article  key ={person.id} className='person'>
                        <img src={person.image} alt={person.name} />
                        <div>
                            <h4>{person.name}</h4>
                            <p>{person.age} years</p>
                            <p>{person.job}</p>
                        </div>
                    </article>
                ); 
            }): 
            <p>There is no Content</p>}
                
        </>
    );
};

export default List;