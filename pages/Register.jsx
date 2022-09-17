import React from 'react'
import { Link } from 'react-router-dom';
import { HOME, LOGIN } from '../routes/path';
import FormInputs from './../components/usuario/FormInputs';
import './usuario.css'
const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
       
        console.log(Object.fromEntries(data))
    }
    
      return (
        <section className='container'>
            <form onSubmit={handleSubmit}>
            <FormInputs name='firstName' type='text' placeholder="Enter first name" />
            <FormInputs name='lastName' type='text' placeholder="Enter last name" />
            <FormInputs name='userName' type='text' placeholder="Enter Username" />
            <FormInputs name='email' type='email' placeholder="Enter Email" />
            <FormInputs name='password' type='password' placeholder="Password" />
                <button>Submit</button>
            </form>
            <div>
        <br/>
        Do you have an account??
                <Link to={LOGIN}>Login</Link> 
            </div>
        <br/>
        You want to go back ?
                 <Link to={HOME}>Inicio</Link>
        </section>
      )
    }

export default Register