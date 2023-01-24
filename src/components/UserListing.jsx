import React, { useState } from 'react'
import { deleteUserService } from '../services/service'
import { useNavigate } from 'react-router-dom'
const UserListing = (props) => {
    const { items, index, getUsersData } = props.items
    const navigate = useNavigate()
    const [isDeletedClicked, setIsDeletedClicked] = useState(false)
    async function deleteUser(id) {
        setIsDeletedClicked(true)
        await deleteUserService(id)
        getUsersData()
        setIsDeletedClicked(false)

    }
    return (
        <tr>
            <td>{items.name}</td>
            <td>{items.email}</td>
            <td>{items.gender}</td>
            <td>{items.status}</td>
            <td><button className='edit_btn' onClick={() => navigate(`/edituser/${items.id}`)}>Edit</button><button className='delete_btn' onClick={() => deleteUser(items.id)}>{isDeletedClicked ? 'Deleting..' : "Delete"}</button></td>

        </tr>
    )
}

export default UserListing
