
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
const UserList = () => {
    const [listuser, setListuser] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((result) =>
            setListuser(result.data))
    })
    return (
        <div >
            <div className='list'>
                <UserCard users={listuser} />
            </div>
            
        </div>
    )
}
export default UserList