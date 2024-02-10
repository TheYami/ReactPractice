import React from 'react'
import './formcomponent.css'

import { useState } from 'react'


function FormCompoent() {

    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRePassword] = useState('');

    //set error messege เป็นค่าว่าง
    const [errorUserName,setErrorUserName] = useState('');
    const [errorEmail,setErrorEmail] = useState('');
    const [errorPassword,setErrorPassword] = useState('');
    const [errorRePassword,setErrorRePassword] = useState('');

    //state เก็บสี
    const [userNameColor,setUserNameColor] = useState('');
    const [emailColor,setEmailColor] = useState('');
    const [passwordColor,setPasswordColor] = useState('');
    const [rePasswordColor,setRePasswordColor] = useState('');

    const validateForm = (event)=>{
        event.preventDefault();

        if(userName.length>8){
            setErrorUserName('');
            setUserNameColor('green');
        }else{
            setErrorUserName('กรุณาป้อน usernameให้มากกว่า 8 ตัวอักษร')
            setUserNameColor('red');
        }

        if(email.includes('@')){
            setErrorEmail('');
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง');
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('');
            setPasswordColor('green');
        }else{
            setErrorPassword('กรุณาป้อรหัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('red');
        }

        if(repassword !== '' && repassword === password){
            setErrorRePassword('');
            setRePasswordColor('green')
        }else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red')
        }
    }

  return (
    <div className='container'>
        <h2>Form Register</h2>
        <form className='form' onSubmit={validateForm}>
            <div className='form-control'>
                <label >UserName</label>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                <small style={{color:userNameColor}}>{errorUserName}</small>
            </div>
            <div className='form-control'>
                <label >Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                <small style={{color:emailColor}}>{errorEmail}</small>
            </div>
            <div className='form-control'>
                <label >Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                <small style={{color:[passwordColor]}}>{errorPassword}</small>
            </div>
            <div className='form-control'>
                <label >Re-Password</label>
                <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:rePasswordColor}}/>
                <small style={{color:rePasswordColor}}>{errorRePassword}</small>
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormCompoent