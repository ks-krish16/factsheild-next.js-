'use client';
import React,{useState} from 'react'
import './signup.css'
import Nav from '../nav.jsx'


export default function SignUpPage() {
    const [form,setForm]= useState({name:'',email:'',password:''})
    const [message,setMessage]= useState('')

    const handleChange=(e)=> {
        setForm({...form,
          [e.target.name]: e.target.value})

    }

    const handleForm=(e)=>{
        e.preventDefault()

        fetch('/api/users',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(form)
        }).then(
            (res)=>res.json()
        ).then(
            (data)=>{setMessage(data.message)
              console.log(data.message)
              window.location.href= "/"
            }
        ).catch((err)=>{
            setMessage(err.message || 'Something went wrong');

            console.log(err)
        })
    }

  return (
    <>
    <Nav/>
    <div className='form'>
      <h1>Signup</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" onChange={handleChange}></input>
        <input type="email" name="email" onChange={handleChange}></input>
        <input type="password" name="password" onChange={handleChange}></input>
        <button >Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </>
  )
}
