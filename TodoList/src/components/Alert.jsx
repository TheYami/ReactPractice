import React, { useEffect } from 'react'

function Alert(props) {
    const {msg,type,setAlert,list} = props

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert({show:false,msg:'',type:''})
        },3000)
        return ()=>clearTimeout(timeOut)
    },[list])
  return (
    <p className={`alert ${type}`}>
        {msg}
    </p>
  )
}

export default Alert