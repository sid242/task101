import React, { useEffect, useState } from 'react'
import UserListing from './UserListing'
import { getUsersService } from '../services/service'
import { useNavigate, useLocation } from 'react-router-dom'

const UserHome = () => {

    const [users, setUsers] = useState([])
    const [isGetUserClicked, setIsGetUserClicked] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (location.search == "?ref=adduser" || location.search == "?ref=edituser") {
            getUsersData()
        }
    }, [location])

    async function getUsersData() {
        console.log("get called");
        setIsGetUserClicked(true)
        var users = await getUsersService()
        setUsers(users)
    }

    async function getFilterData(filterData) {

        if (filterData == '') {
            await getUsersData()
        } else {
            setUsers(
                users.filter((items => {
                    return items.name.toLowerCase().includes(filterData.toLowerCase())
                }
                )))
        }
    }
    return (
        <div>
            <h1>User Listing</h1>
            <button className='get_user' onClick={() => getUsersData()}>Get User's List</button>
            <button className='add_user' onClick={() => navigate('/adduser')}>Add User</button>
            <div>
                <input type="text" onChange={(e) => getFilterData(e.target.value)} placeholder='Search User By Name' />
            </div>

            {
                isGetUserClicked ?
                    users.length != 0 ? <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                users.map((items, index) =>
                                    <UserListing key={index} items={{ items, index, getUsersData }} />
                                )
                            }
                        </tbody>


                    </table> : "Loading.." : ""
            }

        </div>
    )
}

export default UserHome
