import React from 'react';

const List = ({people}) => {
    return (
        <>
            {people.map((person,index) => {
                const {id, name, age, image } = person;
                return(
                    <article key={index} className='person'>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                ); 
            })}     
                
        </>
    );
};

export default List;