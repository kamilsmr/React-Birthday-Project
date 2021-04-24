import React, { useState } from 'react';
// import data from './data';
import List from './components/List';
import List2 from './components/List2';


const Data= [
  {
      id: 1,
      name:'kamil SAYIN',
      age:35,
      image:'https://pbs.twimg.com/profile_images/989464158373601281/oTLXAjNu.jpg',
      job:"Student"

  },
  {
      id: 2,
      name:'Ahmet SELIM',
      age:23,
      image:'https://img.tozlu.com/Uploads/UrunResimleri/Thumb/tek-cepli-erkek-t-shirt-f288.jpg',
      job:"Student"

  },
  {
      id: 3,
      name:'Esma MARTI',
      age:30,
      image:'https://i.pinimg.com/originals/75/1e/d2/751ed259364bdf3e9f41dd0ef94e68b3.jpg',
      job:"Engineer"

  },
  {
      id: 4,
      name:'Mert OKAY',
      age:19,
      image:'https://i.pinimg.com/originals/f6/78/6a/f6786a193673c6b54f526618fe58d21d.jpg',
      job:"Lawyer"
  },


];

function App() {

  const [data, setData] = useState(Data)


const deleteAll =()=>{

setData('')
}


  return (
    <main>
      <section className='container'>
        <h3>{data.length} birtdays today</h3>
        {/* <List people={data} /> */}
        <List2 people={data} />
        <button onClick={deleteAll}>
          Clear All
        </button>



      </section>
    </main>


  );

}

export default App;
