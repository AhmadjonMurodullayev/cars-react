import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Index() {
  const [form,setForm] = useState({})
  const navigate = useNavigate()
  const handleChange = (event)=>{
    const {name,value} = event.target
    setForm({...form, [name]: value})
  }
  const handleSubmit =(event)=>{
    event.preventDefault()
   let  payload = {...form, password: Number(form.password)}
    if(payload.username == 'admin' && payload.password === 123){
      navigate('/cars')
    }else{
      alert("xata parol kiritildi") 
    }

  }
  return (
    <div className='container'>
      <div className='row'>
         <div className='col-md-6 offset-3 '>
              <div className="card">
                <div className="card-header">
                  <h1  className='text-center '>Login</h1>
                </div>
                <div className="cart-body">
                  <form  id='form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='username' name='username' onChange={handleChange} className='form-control my-2' />
                    <input type="password" placeholder='password' name='password' onChange={handleChange} className='form-control my-2' />
                  </form>
                </div>
                <div className="cart-footer">
                  <button className='btn  btn-success' type='submit'form='form' >save</button>
                </div>
              </div>
         </div>
      </div>
    </div>
  )
}

export default Index