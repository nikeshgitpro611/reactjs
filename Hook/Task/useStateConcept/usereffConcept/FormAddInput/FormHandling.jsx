import React, { useEffect, useId, useRef, useState } from 'react'

const FormHandling = () => {
    const [form, setForm] = useState({
        name: 'test',
        email: 't@gmail.com',
        age: '22',
    })
    const [collection, setCollection] = useState([])


    const nameReff = useRef()
    const emailReff = useRef()
    const ageReff = useRef()
    const id = useId()
    let nameCurrentValue;
    let emailCurrentValue;
    let ageCurrentValue;


    //Form Submit
    const handelSubmit = (e) => {
        e.preventDefault();

        if (nameReff.current.value != '' && emailReff.current.value != '' && ageReff.current.value != '') {
            setCollection([{ id: id, name: nameReff.current.value, email: emailReff.current.value, age: ageReff.current.value }, ...collection]);
            setForm({ name: '', email: '', age: '' })
        }

    }

    // For Input
    const handelChange = () => {
        let nameCurrentValue = nameReff.current.value;
        let emailCurrentValue = emailReff.current.value;
        let ageCurrentValue = ageReff.current.value;

        setForm({ name: nameCurrentValue, email: emailCurrentValue, age: ageCurrentValue })
    }

    const handelDelte = (id) => {
        const filterDtat = collection.filter(data => data.id != id)
        setCollection(filterDtat)
    }

    console.log('collection : ', collection);

    return (
        <div>
            <h2>Form Handling By Use reff</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} onSubmit={handelSubmit}>
                <label htmlFor="name" >
                    Name : <input type="text" ref={nameReff} value={form.name} onChange={handelChange} placeholder='Name Here...' style={{ padding: '12px' }} />
                </label>
                <label htmlFor="name">
                    Email : <input type="email" ref={emailReff} value={form.email} placeholder='Email Here...' style={{ padding: '12px' }} onChange={handelChange} />
                </label>
                <label htmlFor="name">
                    Age : <input type="number" ref={ageReff} value={form.age} placeholder='Age Here...' style={{ padding: '12px' }} onChange={handelChange} />
                </label>
                <div style={{ display: 'inline-block', justifyContent: 'center', alignItems: 'center' }}>
                    <button type='submit' style={{ padding: '12px 32px' }}> 🆗</button>
                </div>

            </form>

            <div className="">
                {collection.length === 0 ? 'Hey! No data Available' : (
                    <div className="">
                        <p>All Input Details</p>
                        {collection.map(data => {
                            const { id, name, email, age } = data;
                            return (
                                <div style={{marginBottom : '22px',border: '2px solid green', padding: '23px', width: '13rem' }}>
                                    <div key={id} style={{}}>
                                        <p>🔢 Name : {name}</p>
                                        <p>📧 Email : {email}</p>
                                        <p>🔞 Age : {age}</p>
                                        <button onClick={() => handelDelte(id)}>➖</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormHandling
