import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [name, setName] = useState('')
  const [list,setList] = useState([])
  const [alert ,setAlert] = useState({show:false,msg:'',type:''})
  const [checkEdit,setCheckEdit] = useState(false)
  const [editId,setEditId] = useState('')

  const submitData = (e)=>{
    e.preventDefault()
    if(!name){
      setAlert({show:true,msg:"please add data",type:"error"})
    }else if(checkEdit && name){
      const result = list.map((item)=>{
        if(item.id === editId){
          return {...item,title:name}
        }
        return item
      })
      setList(result)
      setName('')
      setCheckEdit(false)
      setEditId(null)
      setAlert({show:true,msg:"Edit success",type:"success"})
    }
    else{
      const newItem = {
        id:uuidv4(),
        title:name
      }
      setList([...list,newItem])
      setName('')
      setAlert({show:true,msg:"success",type:"success"})
    }
  }

  const removeItem = (id)=>{
    const result = list.filter((item)=>item.id !== id)
    setList(result)
    setAlert({show:true,msg:"delete success",type:"error"})
  }

  const editItem = (id) =>{
    setCheckEdit(true)
    setEditId(id)
    const searchItem = list.find((item)=>item.id === id)
    setName(searchItem.title)
  }

  return (
    <section className='container'>
      <h1>To Do List App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form className='form-froup' onSubmit={submitData}>
        <div className="form-control">
          <input type="text" className='text-input' 
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
          />
          <button type='submit' className='submit-btn'>{checkEdit?"Edit":"Add"}</button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data,index)=>{
          return <List key={index} {...data} removeItem = {removeItem} editItem={editItem}/>
        })}
      </section>
    </section>
  )
}

export default App
