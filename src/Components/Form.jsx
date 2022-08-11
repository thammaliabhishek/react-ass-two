import React,{useState} from 'react';


export const Form = () => {
    const [store,setStore]=useState({
        name:'',
        department:'',
        rating:''
  });
  const [out,setOut]=useState([]);
  const inputone = (e) => {
     const name=e.target.name;
     const value=e.target.value;
     //console.log(name,value);
     setStore({...store,[name]:[value]})
  }
  const submit=(e)=>{
    e.preventDefault();
    setOut([...out,{...store,id:out.length}]);
  }

  
  return (
    <>
    <div className='main'>
        
        <h1 className='heading'>EMPLOYEE FEEDBACK FROM</h1>
         <form onSubmit={submit}> 
            <label className='lb1'>Name:
                <input required className='box-one' type="text" name="name" value={store.name} onChange={inputone} />
            </label>
            <label className='lb2'>Department:
                <input required className='box-one' type="text" name="department" value={store.department} onChange={inputone} />
            </label>
            <label className='lb3'>Result:
                <input required className='box-one' type="number" name="rating" value={store.rating} onChange={inputone} />
            </label>
              <input className='sub-box' type="submit" value='submit'/>
        </form>
        
        </div>
        <div className='new'>
        {out.map(ele=>(<h4 className='msg' key={ele.id}>Name:{ele.name} || Department:{ele.department} || Rating:{ele.rating}  </h4>))}

    </div>
        
    </>
  )
}
export default Form;
