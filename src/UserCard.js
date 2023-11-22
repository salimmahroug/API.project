import React from 'react'
import './UserList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const style = { textAlign: 'center' }
const UserCard = ({ users }) => {
    return (
        <div className='box'>
            {users.map((user) => (
                <div className='card' key={user.id}>
                    <img src="https://us.123rf.com/450wm/apoev/apoev1901/apoev190100050/126178770-personne-espace-r%C3%A9serv%C3%A9-photo-gris-homme-dans-une-chemise-sur-fond-blanc.jpg?ver=6"></img>
                    <h3 className='name'>{user.name}</h3>
                    <h5>{user.username}</h5>
                    <div className='div'>
                    <div className='divv'>Email :  {user.email}</div>
                    <div className='divv'>Phone :  {user.phone}</div>
                    <div className='divv'>Website :  {user.website}</div>
                    </div>
                    <div className='discription'>
                    
                        <h1 style={style}>adress:</h1>
                        <p>suite :  {user.address.street}<br />
                            suite : {user.address.suite}<br />city :  {user.address.city}<br /></p>
                            <h1 style={style}>company:</h1>
                            <p>name :  {user.company.name}<br />
                            catchPhrase : {user.company.catchPhrase}<br />_________________________</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
export default UserCard
