import './luuletus.css'

import space from './Space2.png'

import Luuletus from './Luuletus';

function App() {
  return (
    <div
      className="container">
        <h1> Maailma parim luuletus</h1>
        <Luuletus/>
        <img className='img-responsive'  src={space} alt='space'/>

      <div>

        </div>
    </div>
  );
}

export default App;
