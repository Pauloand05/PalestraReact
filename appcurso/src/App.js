import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setlikes] = useState(0);

  const DaroLike = () => {
    setlikes(likes + 1);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p>Quantidade de likes:{likes}</p>
        </div>
        <div className='col'>
          <input type='button' value="likes" onClick={DaroLike}></input>
        </div>
        <div className='col'>

        </div>
      </div>
    </div>
  );
}

export default App;
