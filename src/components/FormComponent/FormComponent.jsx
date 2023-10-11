import React from 'react'
import './FormComponent.css'

const FormComponent = () => {
    
  return (
    <div className='formComponent'>
        <form className='form'>
            <label>Name</label>
            <input type='text' placeholder='name' />
            <label>Name</label>
            <input type='email' placeholder='E-mail' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormComponent