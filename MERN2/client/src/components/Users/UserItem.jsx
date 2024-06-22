import React from 'react'
import '../../assets/Css/UserItem.css'
import Avatar from '../Shared/Avatar'
import {Link} from 'react-router-dom'
import Card from '../Shared/Card'

const UserItem = ({id,image,name,places}) => {
  return (
    <li className='user-item'>
      <div className="user-item__content">
        <Card className = 'user-item__content'>
        <Link to = {`/${id}/places`}>
        <div className="user-item__image">
          <Avatar image={image} name={name}/>
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>{places} {places === 1 ? 'Place' : 'Places'}</h3>
        </div>
        </Link>
        </Card>
      </div>
    </li>
  )
}

export default UserItem
