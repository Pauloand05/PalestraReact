import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);

  const DaroLike = () => {
    setLikes(likes + 1);
  }

  const DaroDisLike = () => {
    setLikes(likes - 1);
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
          <input type='button' value="dislikes" onClick={DaroDisLike}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
