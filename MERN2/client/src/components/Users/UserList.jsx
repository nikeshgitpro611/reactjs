import React from 'react';
import '../../assets/Css/UsersList.css'
import UserItem from './UserItem';
import Card from '../Shared/Card';

const UserList = ({ items }) => {

    if (items.length === 0) {
        return (
            <div className="center">
                <Card>
                <h2>No user Found</h2>
                </Card>
            </div>
        )
    }


    return (
        <ul>
            {items.map(data=>{
               return <UserItem {...data} key={data.id}/>
            })}
        </ul>
    )
}

export default UserList
