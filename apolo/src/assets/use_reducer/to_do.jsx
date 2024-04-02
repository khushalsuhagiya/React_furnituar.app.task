// import React,{useState} from 'react'

// const To_do = () => {

//     const [input , setInput] = useState();
//     const [list , setlist] = useState([]);
//     const [id , setid] = useState("");
//     const [update , setupdate] = useState(false);


//     const handleInput = (e)=>{
//         setInput(e.target.value)
//     }

//     const handletask = ()=>{
//         setlist([...list,input])
//         setInput('')
//     }
//     const handleupdate = ()=>{
//         list.splice(id, 1 , input)
//         setInput("")
//         setupdate(false)
//     }
//     const handleRemove = (i)=>{
//         const filterList = list.filter((elem)=> elem !== list[i])
//         setlist(filterList)
//     }
//     // const handleEdit = (i)=>{
//     //     const filterList = list.filter((elem)=> elem === list[i])
//     //     setInput(filterList[0])
//     //     setid(i)
//     //     setupdate(true)
//     // }

//   return (
//     <>
//     <div className='ms-4'>
//      <div className="input-box">
//         <input type="text" placeholder='enter task' className='p-2 border border-gray-950' onChange={(e)=> handleInput(e)} /> {update ? <button className='btn' onClick={handleupdate}>Update</button> : <button className='btn' onClick={handletask}>Add task</button>} 

//      </div>
//      <div className="list ">
//         <ul>
//             {list.map((item,i)=><li key={i}>{item}
//              {/* <button className='btnn ms-2' onClick={()=>handleEdit(i)}>Edit</button> */}
//              <button className='btn ms-2' onClick={()=>handleRemove(i)}>Remove</button>
//              </li>)}
//         </ul>
//      </div>
//      </div>
//     </>
//   )
// }

// export default To_do
























import React from 'react'
import { useState} from 'react'

const To_do = () => {

  const [item, setItem] = useState("");
  const [listValue, setListValue] = useState([]);

  /* unique Key */
  

  function addItems(){
    // setListValue([...listValue , item]);
    // console.log(listValue);
    setListValue((listValue)=> {
      const upadatedList = [...listValue , item];
      console.log(upadatedList);
      setItem('');
      return upadatedList
    });
  }

  function removeItem(i){
    const updatedListData = listValue.filter((elem , id) => {
      return i!=id;
    })
    setListValue(updatedListData);
  }

  return (
    <div className='container bg-slate-500 mx-auto p-10'>
      <div className=''>
        <h1 className='text-center text-2xl font-black underline'>TO-DO LIST</h1>
        <div className='flex justify-center'>
        <div className='my-10 border-solid border-black border-2 w-fit'>
          <input className='p-2 focus:outline-none' type="text" placeholder='Add Items' value={item} onChange={(e) =>setItem(e.target.value)} />
          <button className='bg-purple-700 p-2' onClick={addItems}>Add Item</button>
        </div>
        </div>
          <p className='border-solid border-black border-2 text-black mt-4 bg-purple-500 p-1'>
            Here Is List Items
          </p>
          {
            listValue!=[] && listValue.map((data , i) => {
              return(
              <>
                <p key={i}>
                  <div className='flex mt-4'>
                  <div className='btn'>{data}</div>
                  <button className='btn' onClick={() => removeItem(i)}>Remove</button>
                  </div>
                </p>
              </>
            )})
          }
      </div>
    </div>
  )
}

export default To_do
