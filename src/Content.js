import { useState } from 'react';
import{FaTrashAlt} from 'react-icons/fa';
const Content = () => {
  const [items,setItems]=useState([
    {
      id:1,
      checked:false,
      item:"one cocoa bag"
    },

    {
      id:2,
      checked:false,
      item:"Vegetables"
    },

    {
      id:3,
      checked:false,
      item:"Bubblegum and sour candy"
    },

    {
      id:4,
      checked:false,
      item:"Toothpaste and brush"
    },

    {
      id:5,
      checked:false,
      item:"Lays chips 2 packets"
    }
  ]); //providing default state name
  // const[count,setCount]=useState(0);

   const handleCheck = (id) =>
   {

    const listItems=items.map((item) => item.id === id ? { ...item,checked:!item.checked } : item);
    // console.log(`key:${id}`)
    setItems(listItems);
    // localStorage.setItems('shoppinglist',JSON.stringify(listItems));
   }
   const handleDelete = (id) =>
   {
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);

    
   }


  return (
    
    <main className="content-main">
      {items.length ? (
        <ul>
          {items.map((items) => 

          (
            <li className='item' key={items.id}>
              <input type="checkbox" 
              onChange={()=> handleCheck(items.id)}
              checked ={items.checked}/>
              <label
                style={(items.checked)?{textDecoration:'line-through'} : null}
                onDoubleClick={()=> handleCheck(items.id)}
              >
                {items.item}
              </label>
              <FaTrashAlt 
              onClick={() => handleDelete(items.id) }
              role ="button"
              tabIndex="0" />

            </li>
          )
          )}
        </ul>
      ):(
        <p style={{marginTop:'2rem' }}>
        your list is empty
        </p>
      )
        }
    </main>
  )
}

export default Content