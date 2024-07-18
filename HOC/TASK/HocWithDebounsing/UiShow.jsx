import React from 'react'
import Hoc from './Hoc'

//Task
//Filter data and impliment debounsing concept in input field
const UiShow = ({ students, teachers }) => {
    return (
        <div>
            <h3>List First for Student</h3>
            <ul>
                {students.map((data,index) => <li key={index}>hey!{data.name} your age is{data.age}</li>)}
            </ul>
            <h3>List Second for Teachers</h3>
            <ul>
                {teachers.map((data,index) => <li key={index}>hey!{data.name} your age is{data.age}</li>)}
            </ul>

        </div>
    )
}

export default Hoc(UiShow)
