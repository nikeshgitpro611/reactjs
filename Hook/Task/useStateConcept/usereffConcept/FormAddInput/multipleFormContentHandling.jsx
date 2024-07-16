import React, { useRef, useState } from 'react'

// TASK by use useReff
// Hnadel Multiple form Input
//button  show : submitting..: submite
// after that store data in array and show sucess store message
// use promise data will be show store after 2s
const MultipleFormContentHandling = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    file: null,
  })
  const [storeData, setStoreData] = useState([]);
  const [sucess, setSucess] = useState(false)
  const [loadind, setLoading] = useState(false)
  const [error, setError] = useState('')

  //Reff Menaging
  let nameReff = useRef();
  let emailReff = useRef();
  let ageReff = useRef();
  let countryReff = useRef();
  let fileReff = useRef();

  //Function Handling
  const handelSubmit = async (e) => {
    e.preventDefault();
    let nameStore = nameReff.current.value;
    let emailStore = emailReff.current.value;
    let ageStore = ageReff.current.value;
    let countryStore = countryReff.current.value;
    let fileStore = fileReff.current.value;
    if (nameStore != '' && emailStore != '' && ageStore != '' && fileStore != '') {
      setStoreData([{ name: nameStore, email: emailStore, age: ageStore, country: countryStore, file: fileStore }, ...storeData]);
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 1000))
      setFormData({
        name: '',
        email: '',
        age: '',
        country: '',
        file: null,
      })
      setLoading(false)
      setSucess(true)
      setError(false)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSucess(false)
    }else{
      setError(true) 
    }


  }
  const handelChange = () => {
    setFormData({ name: nameReff.current.value })
  }

  return (
    <div>
      <h2>Multiple Form Data Handling with useReff..</h2>
      <form onSubmit={handelSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '2rem', gap: '17px', border: '1px solid brown', borderRadius: '44px', width: '26rem' }}>
        <label htmlFor="name">Name : <input type="text" ref={nameReff} onChange={handelChange} value={formData.name} /></label>
        <label htmlFor="email">Email : <input type="email" ref={emailReff} onChange={handelChange} value={formData.email} /></label>
        <label htmlFor="age">Age : <input type="number" ref={ageReff} onChange={handelChange} value={formData.age} /></label>
        <label htmlFor="country">country :  <select ref={countryReff} onChange={handelChange} value={formData.country}>
          <option value="">Select Option</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">Uk</option>
        </select></label>
        <label htmlFor="file">File : <input type="file" ref={fileReff} onChange={handelChange} value={formData.file} /></label>

        <button>{loadind ? <p style={{ fontWeight: 500, color: 'red' }}>Submitting..</p> : 'Submit'}</button>
        {error && <p style={{color: 'red', fontWeight: 500}}>⚡Need to be fill all input field!!</p>}
      </form>
      {sucess && <h2 style={{ fontFamily: 'revert-layer', color: 'green', position: 'absolute', top: '14rem', left: '40rem' }}>Details Stored In Sucessfully..</h2>}

      <div className="">
        {storeData.length === 0 ? <h2>🫗Hey! no Data existing..</h2> : (
          <div className="">
            <h2>🏢Show All Data</h2>
            {storeData.map(data=>{
              const {name, email,age,file, country} = data
              return(
                <div style={{fontFamily: 'sans-serif', color: 'green'}}>
                  <p>Welcom {name} your mail id {email} and age is {age} uploade file {file} from {country}</p>
                  
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default MultipleFormContentHandling
