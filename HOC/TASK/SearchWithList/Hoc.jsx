import React, { useRef, useState } from 'react'

const Hoc = (Orignal) => {

    return () => {
        const list1 = ['Eggfruit', 'Fig', 'Grape', 'Honeydew', 'Apple'];
        const list2 = ['Apple', 'Banana', 'Cherry', 'Date'];
        const [serch, setSearc] =  useState('')
        const inputReff =  useRef();

        const filterSearch = (list1, search)=> {
            return list1.filter(data=> data.toLowerCase().includes(serch.toLowerCase()))
        }
        const filter1 = filterSearch(list1, serch)
        const filter2 = filterSearch(list2, serch)
        return (
        <div className="">
            <input type="text" ref={inputReff} value={serch} onChange={()=> setSearc(inputReff.current.value)} placeholder='search me'/>
            <Orignal list1 = {filter1} list2 = {filter2}/>
        </div>
        )
    }
}

export default Hoc
