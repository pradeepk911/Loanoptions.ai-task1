import logo from './logo.svg';
import './App.css';

function App(){

  const load = () => {

  }

  const deleteLast = () => {
    
  }

  const add = () => {
    
  }

  return (
    <div>
      <button onClick={load}>LOAD</button>
      <button onClick={deleteLast}>DELETE</button>
      <button onClick={add}>ADD</button>
      <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
      </table>
    </div>  
  );
};

export default App;
