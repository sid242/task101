import React, { useState } from 'react'
import { addUserService } from '../services/service'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    })
    const navigate = useNavigate()

    async function addUser(e) {
        e.preventDefault();
        await addUserService(user)
        navigate('/?ref=adduser')
    }
    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={addUser}>
                <div>
                    <input type="text" required onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder='Enter Name' />
                </div>
                <div>
                    <input type="email" required onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='Enter Email' />
                </div>
                <div>
                    <label htmlFor="male">Male</label>
                    <input type="radio" required onClick={(e) => setUser({ ...user, gender: e.target.id })} name="gender" id='male' />
                    <label htmlFor="female">Female</label>
                    <input type="radio" required onClick={(e) => setUser({ ...user, gender: e.target.id })} name="gender" id='female' />
                </div>
                <div>
                    <label htmlFor="active">Active</label>
                    <input type="radio" required onClick={(e) => setUser({ ...user, status: e.target.id })} name="status" id='active' />
                    <label htmlFor="inactive">Inactive</label>
                    <input type="radio" required onClick={(e) => setUser({ ...user, status: e.target.id })} name="status" id='inactive' />
                </div>
                <button className='add_user' type='submit' >Add User</button>
            </form>
        </div>
    )
}

export default AddUser
