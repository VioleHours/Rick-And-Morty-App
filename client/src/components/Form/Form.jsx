import './Form.css'
import React from "react"
import { validation } from '../validation';
import { useState } from 'react'

const Form = (props) => {
    const [userData, setUserData] = useState({
        username:'',
        password:'',
    });

    const [errors, setErrors] = useState({
        username:'',
        password:'',
    });

    const handleInputChange = (e) => {
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value,
            })
        )
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)

        const propsArr = Object.keys(errors)
            if (propsArr.length === 0) {
                setErrors({
                    username: '',
                    password: ''
            })

                setUserData({
                    username: '',
                    password: ''
            })
        } else alert('Debe rellenar todos los campos')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor='username'> Username: </label>
            <input 
                type='text'
                name='username'
                value={userData.username}
                oneChange={handleInputChange}
                />
            {errors.username !== ''? <p className='danger' >{errors.username}</p> : ''}
            <label htmlFor='password'> Password: </label>
            <input 
                type='text'
                name='password'
                value={userData.password}
                oneChange={handleInputChange}
                />
            {errors.password !== ''? <p className='danger' >{errors.password}</p> : ''}
            <button type='submit'> Login </button>
            </form>
        </div>
    )
}

export default Form;