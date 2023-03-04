import './App.css';
import { useEffect,useState } from 'react';
import Advices from './Advices';


function App() {

  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <div className="container">
      <Advices/>
      <button onClick={fetchAdvice}>Tips here</button>

      <div className='advice'>
      <p>{advice}.</p>
      </div>

    </div>
  );
}

export default App;
