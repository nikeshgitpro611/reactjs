import { useEffect, useState } from "react"
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Remove Tour
  const removeTours = (id) => {
    console.log('Id : ', id);
    const removeTour = tourData.filter(data => data.id !== id);
    setTourData(removeTour)
  }

  //Fetch API
  const fetchAPICall = async () => {
    try {
      const responce = await fetch(url);
      const json = await responce.json();
      console.log('JSon : ', json);
      setLoading(false)
      setTourData(json)
    } catch (error) {
      setLoading(true)
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAPICall()
  }, []);

  if (loading) {
    return
    <main>
      <Loading />
    </main>
  }

  //Buton for ref
  if (tourData.length === 0) {
    return (
      <main className="">
        <div className="title">
          <h2>No Tour Left's</h2>
          <button type='button' className="btn" style={{marginTop: '2rem'}} onClick={()=> fetchAPICall()}>Refress Please</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tourData={tourData} removeTours={removeTours} />
    </main>
  )
}

export default App
