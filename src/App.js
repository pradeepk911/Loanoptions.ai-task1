import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App(){

  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [err, setErr] = useState('');
  
  const load = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://universities.hipolabs.com/search?country=Australia', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
      setDataLoaded(true);
    }
  };


  const deleteLast = () => {
    
  }

  const add = () => {
    
  }

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={load}>LOAD</button>
      <button onClick={deleteLast}>DELETE</button>
      <button onClick={add}>ADD</button>

      {isLoading && <h2>Loading...</h2>}
      <table>
      {isDataLoaded && data.map(school => {
        return (
          <tr>
            <td>{school.name}</td>
            <td>{school.country}</td>
            <td></td>
            <td>{school.domains}</td>
            <td>{school.web_pages}</td>
          </tr>
        );
      })}
      </table>

    </div>  
  );
};

export default App;
