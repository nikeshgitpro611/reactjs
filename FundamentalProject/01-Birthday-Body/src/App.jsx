import { useState } from 'react'
import data from './data'
import List from './component/List';

function App() {
  const [people, setPeople] = useState(data);
  const handler = () => {
    window.location.reload()
  }
  return (
    <main>
      <div className='container'>
        <h3>{people.length} Birthday todays</h3>
        <List people = {people} />
        
        <button className='btn btn-block' onClick={()=> setPeople([])}>clear all</button>
        <button className='btn btn-block' onClick={handler}>clear all</button>
      </div>

    </main>
  )
}

export default App
