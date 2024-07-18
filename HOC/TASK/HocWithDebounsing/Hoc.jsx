import React, { useRef, useState } from 'react'

const Hoc = (OrignalFunction) => {
    const students = [
        { name: 'Alice', age: 20 },
        { name: 'Bob', age: 22 },
        { name: 'Charlie', age: 23 },
        { name: 'David', age: 21 },
    ];

    const teachers = [
        { name: 'Mrs. Smith', subject: 'Math' },
        { name: 'Mr. Johnson', subject: 'Science' },
        { name: 'Ms. Lee', subject: 'English' },
        { name: 'Mr. Brown', subject: 'History' },
    ];

    const customDebousing = (fun, time) => {
        let timer;
        return (...arg) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fun.apply(this, arg)
            }, time)
        }
    }

    return () => {
        const [search, setSearch] = useState('')
        const inputReff = useRef();
        const filterData = (List, search) => {
            return List.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        }
        const studentData = filterData(students, search)
        const teacherData = filterData(teachers, search)

       
        const debouns = customDebousing((searchInput) => {
            console.log('Cll');
            setSearch(searchInput)
        }, 300)
        return (
            <div className="">
                <h5>Hoc Concept With Debounsing...</h5>
                <input type="text" ref={inputReff} value={search} onChange={() => debouns(inputReff.current.value)} placeholder='search name ...' />
                <OrignalFunction students={studentData} teachers={teacherData} />
            </div>
        )
    }
}

export default Hoc
