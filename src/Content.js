import { useState } from 'react';
const Content = () => {
  const [name,setName]=useState('Sakshi'); //providing default state name
  const[count,setCount]=useState(0);

    const randomName = () =>
    {
      const names=['sakshi','smriti','ayana','mihir'];
      const i=Math.floor(Math.random() * 4);
      setName(names[i]);
       
    }

    const handleClick = () =>
    {
      setCount(count + 1);
      console.log(count)
    }
   
    const handleClick3 = (e) =>
    {
      console.log(e.target)
    }
  return (
    
    <main className="content-main">
       <p>
        hello {name} !
       </p>
       <button onClick={randomName}>
        change name !
       </button>
       <button onClick={handleClick}>
        Click it
       </button>
       <button onClick={(e) => handleClick3(e)}>
        Click it
       </button>
    </main>
  )
}

export default Content