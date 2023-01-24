import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUsersService, editUserService } from '../services/service'

const EditUser = () => {
    const userId = useParams().id
    const [user, setUser] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    })
    async function getUser() {
        var user = await getUsersService(userId)
        console.log(user);
        setUser(user)
    }
    useEffect(() => {
        return (() => {
            getUser()

        })
    }, [])
    const navigate = useNavigate()

    async function editUser(e) {
        e.preventDefault();
        await editUserService(user, userId)
        navigate('/?ref=edituser')

    }

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={editUser}>
                <div>
                    <input type="text" required value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder='Enter Name' />
                </div>
                <div>
                    <input type="email" required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='Enter Email' />
                </div>
                <div>
                    <label htmlFor="male">Male</label>
                    <input type="radio" required checked={user.gender == "male" ? true : false} onClick={(e) => setUser({ ...user, gender: e.target.id })} name="gender" id='male' />
                    <label htmlFor="female">Female</label>
                    <input type="radio" required checked={user.gender == "female" ? true : false} onClick={(e) => setUser({ ...user, gender: e.target.id })} name="gender" id='female' />
                </div>
                <div>
                    <label htmlFor="active">Active</label>
                    <input type="radio" required checked={user.status == "active" ? true : false} onClick={(e) => setUser({ ...user, status: e.target.id })} name="status" id='active' />
                    <label htmlFor="inactive">Inactive</label>
                    <input type="radio" required checked={user.status == "inactive" ? true : false} onClick={(e) => setUser({ ...user, status: e.target.id })} name="status" id='inactive' />
                </div>
                <button className='edit_btn' type='submit' >Edit User</button>
            </form>
        </div>
    )
}

export default EditUser
