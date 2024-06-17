import React from 'react'
import Person from './Person'

const List = ({ people }) => {
    return (
        <section>
            {people.map(data =><Person key={data.id} {...data} /> )}
        </section>
    )
}

export default List
